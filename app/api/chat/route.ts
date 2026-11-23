import { defaultLocale, hasLocale } from '@/i18n/config';
import { buildSystemPrompt } from '@/lib/chat/system-prompt';

/**
 * Free-text chat backed by Google Gemini. The API key stays on the server;
 * the browser only ever talks to this route.
 */

// Tried in order: Gemini returns 503/429 when a model is overloaded, so fall through to the next.
const MODELS = [...new Set([process.env.GEMINI_MODEL || 'gemini-flash-latest', 'gemini-flash-lite-latest', 'gemini-2.5-flash', 'gemini-2.5-flash-lite'])];
const RETRYABLE = new Set([404, 429, 500, 503, 504]);
const MAX_MESSAGE_CHARS = 500;
const MAX_HISTORY = 10;
const RATE_LIMIT = { requests: 20, windowMs: 10 * 60 * 1000 };

type ChatTurn = { role: 'user' | 'model'; text: string };

// Best-effort, per-instance limiter: enough to stop casual abuse of the key. Use a shared store for strict limits.
const hits = new Map<string, number[]>();
function rateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter(time => now - time < RATE_LIMIT.windowMs);
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > RATE_LIMIT.requests;
}

function parseBody(body: unknown): { messages: ChatTurn[]; locale: string } | null {
  if (!body || typeof body !== 'object') return null;
  const { messages, locale } = body as { messages?: unknown; locale?: unknown };
  if (!Array.isArray(messages) || messages.length === 0) return null;
  const turns = messages.slice(-MAX_HISTORY).flatMap((message): ChatTurn[] => {
    if (!message || typeof message !== 'object') return [];
    const { role, text } = message as { role?: unknown; text?: unknown };
    if ((role !== 'user' && role !== 'model') || typeof text !== 'string' || !text.trim()) return [];
    return [{ role, text: text.trim().slice(0, MAX_MESSAGE_CHARS * 2) }];
  });
  // Gemini expects the conversation to start with a user turn and end with the new question.
  while (turns[0]?.role === 'model') turns.shift();
  const last = turns.at(-1);
  if (!last || last.role !== 'user' || last.text.length > MAX_MESSAGE_CHARS) return null;
  return { messages: turns, locale: typeof locale === 'string' ? locale : defaultLocale };
}

export async function POST(request: Request) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return Response.json({ error: 'unavailable' }, { status: 503 });

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || request.headers.get('x-real-ip') || 'local';
  if (rateLimited(ip)) return Response.json({ error: 'rate_limited' }, { status: 429 });

  const parsed = parseBody(await request.json().catch(() => null));
  if (!parsed) return Response.json({ error: 'bad_request' }, { status: 400 });
  const locale = hasLocale(parsed.locale) ? parsed.locale : defaultLocale;

  const body = JSON.stringify({
    systemInstruction: { parts: [{ text: buildSystemPrompt(locale) }] },
    contents: parsed.messages.map(turn => ({ role: turn.role, parts: [{ text: turn.text }] })),
    generationConfig: { temperature: 0.4, maxOutputTokens: 1024 },
  });

  for (const model of MODELS) {
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-goog-api-key': apiKey },
        body,
        signal: AbortSignal.timeout(15_000),
      });
      if (!response.ok) {
        console.error(`Gemini ${model} failed`, response.status, (await response.text().catch(() => '')).slice(0, 300));
        if (RETRYABLE.has(response.status)) continue;
        break; // Auth or request errors won't be fixed by another model.
      }
      const data = await response.json() as { candidates?: { content?: { parts?: { text?: string; thought?: boolean }[] } }[] };
      const reply = data.candidates?.[0]?.content?.parts?.filter(part => !part.thought).map(part => part.text ?? '').join('').trim();
      if (reply) return Response.json({ reply });
    } catch (error) {
      console.error(`Gemini ${model} error`, error);
    }
  }
  return Response.json({ error: 'upstream' }, { status: 502 });
}
