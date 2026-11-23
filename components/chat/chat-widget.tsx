'use client';

import { useEffect, useId, useRef, useState, type ReactNode } from 'react';
import Link from 'next/link';
import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/dictionaries/es';
import { cn } from '@/lib/utils';

type ChatCopy = Dictionary['chat'];
type Question = ChatCopy['questions'][number];
type Message = { id: number; from: 'bot' | 'user'; text: string; action?: Question['action'] };

interface ChatWidgetProps {
  copy: ChatCopy;
  /** Resolved hrefs for each `action.link` key in the dictionary. */
  links: Record<string, string>;
  newTab: string;
  locale: Locale;
}

/**
 * Preset questions answer instantly from the dictionary; free-text questions go to `/api/chat`
 * (Gemini, key kept server-side) with the conversation so far as context.
 */
export function ChatWidget({ copy, links, newTab, locale }: ChatWidgetProps) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [typing, setTyping] = useState(false);
  const [draft, setDraft] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const request = useRef<AbortController>(undefined);
  const nextId = useRef(0);
  const logRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const panelId = useId();
  const titleId = useId();

  const asked = new Set(messages.filter(message => message.from === 'user').map(message => message.text));
  const remaining = copy.questions.filter(question => !asked.has(question.q));

  useEffect(() => () => { clearTimeout(timer.current); request.current?.abort(); }, []);

  // Pin the latest question to the top of the log so its answer is read first, not the chip list below it.
  useEffect(() => {
    const log = logRef.current;
    if (!log) return;
    const latest = [...log.querySelectorAll<HTMLElement>('[data-from="user"]')].at(-1);
    log.scrollTo({ top: latest ? latest.offsetTop - 16 : 0, behavior: 'smooth' });
  }, [messages, typing]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  function close() {
    setOpen(false);
    toggleRef.current?.focus();
  }

  function ask(question: Question) {
    if (typing) return;
    setMessages(current => [...current, { id: nextId.current++, from: 'user', text: question.q }]);
    setTyping(true);
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    timer.current = setTimeout(() => {
      setTyping(false);
      setMessages(current => [...current, { id: nextId.current++, from: 'bot', text: question.a, action: question.action }]);
    }, reduced ? 0 : 650);
  }

  function reply(text: string) {
    setTyping(false);
    setMessages(current => [...current, { id: nextId.current++, from: 'bot', text }]);
  }

  async function sendFreeText(text: string) {
    const question = text.trim();
    if (!question || typing) return;
    const history = [...messages, { id: nextId.current++, from: 'user' as const, text: question }];
    setMessages(history);
    setDraft('');
    setTyping(true);
    const controller = new AbortController();
    request.current = controller;
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ locale, messages: history.map(message => ({ role: message.from === 'user' ? 'user' : 'model', text: message.text })) }),
        signal: controller.signal,
      });
      const data = await response.json().catch(() => ({})) as { reply?: string; error?: string };
      if (controller.signal.aborted) return; // "Start over" was pressed while waiting.
      if (data.reply) reply(data.reply);
      else reply(data.error === 'unavailable' ? copy.errors.unavailable : data.error === 'rate_limited' ? copy.errors.rate_limited : copy.errors.generic);
    } catch {
      if (!controller.signal.aborted) reply(copy.errors.generic);
    }
  }

  function restart() {
    request.current?.abort();
    clearTimeout(timer.current);
    setTyping(false);
    setMessages([]);
  }

  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col items-end gap-3 transition-opacity duration-300 in-data-[menu=open]:pointer-events-none in-data-[menu=open]:opacity-0 sm:right-6 sm:bottom-6" onKeyDown={event => { if (event.key === 'Escape' && open) close(); }}>
      {open && (
        <div
          id={panelId}
          role="dialog"
          aria-labelledby={titleId}
          // Height leaves room for the sticky site header above and the toggle button below.
          className="flex h-[min(34rem,calc(100dvh-10.5rem))] w-[min(23rem,calc(100vw-2rem))] origin-bottom-right flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-2xl motion-safe:animate-rise-in lg:h-[min(34rem,calc(100dvh-11.5rem))]"
        >
          <div className="flex shrink-0 items-center gap-3 bg-primary px-5 py-3.5 text-primary-foreground">
            <span aria-hidden="true" className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">EH</span>
            <div className="min-w-0 flex-1">
              <p id={titleId} className="text-sm font-semibold">{copy.title}</p>
              <p className="flex items-center gap-1.5 text-xs text-white/60"><span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />{copy.status}</p>
            </div>
            {messages.length > 0 && <button type="button" onClick={restart} className="shrink-0 rounded-full border border-white/20 px-3 py-1.5 text-xs text-white/80 hover:border-accent hover:text-accent">{copy.restart}</button>}
          </div>

          <div ref={logRef} className="relative flex-1 overflow-y-auto overscroll-contain px-4 py-5 [scrollbar-width:thin]">
            <div role="log" aria-live="polite" className="flex flex-col gap-3">
              <Bubble from="bot">{copy.greeting}</Bubble>
              {messages.map(message => (
                <Bubble key={message.id} from={message.from}>
                  {message.text}
                  {message.action && links[message.action.link] && <ActionLink href={links[message.action.link]} newTab={newTab} onNavigate={() => setOpen(false)}>{message.action.label}</ActionLink>}
                </Bubble>
              ))}
            </div>

            {typing ? (
              <div aria-hidden="true" className="mt-3 flex w-fit gap-1 rounded-2xl rounded-bl-sm bg-white px-4 py-3 shadow-sm">
                {[0, 200, 400].map(delay => <span key={delay} style={{ animationDelay: `${delay}ms` }} className="size-1.5 rounded-full bg-muted motion-safe:animate-typing" />)}
              </div>
            ) : remaining.length > 0 ? (
              <div className="mt-5">
                <p className="mb-2.5 text-[0.6875rem] font-semibold tracking-widest text-muted uppercase">{copy.pick}</p>
                <div className="flex flex-wrap gap-2">
                  {remaining.map(question => (
                    <button key={question.q} type="button" data-question onClick={() => ask(question)} className="rounded-full border border-accent/60 bg-white px-3 py-1.5 text-left text-xs text-foreground hover:border-accent hover:bg-accent/15">
                      {question.q}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <p className="mt-5 text-sm text-muted">{copy.handoff}</p>
            )}
          </div>

          <form
            className="flex shrink-0 items-center gap-2 border-t border-border bg-white px-3 py-3"
            onSubmit={event => { event.preventDefault(); void sendFreeText(draft); }}
          >
            <label htmlFor={`${panelId}-input`} className="sr-only">{copy.inputLabel}</label>
            <input
              ref={inputRef}
              id={`${panelId}-input`}
              value={draft}
              onChange={event => setDraft(event.target.value)}
              maxLength={500}
              autoComplete="off"
              placeholder={copy.inputPlaceholder}
              className="min-h-11 min-w-0 flex-1 rounded-full border border-border bg-background px-4 text-sm placeholder:text-muted focus:border-accent focus:outline-none focus-visible:!outline-none focus-visible:!outline-offset-0"
            />
            <button type="submit" disabled={typing || !draft.trim()} aria-label={copy.send} className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground hover:bg-accent/85 disabled:opacity-40 motion-safe:transition-[opacity,transform] motion-safe:enabled:hover:scale-105">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </button>
          </form>
          <p className="shrink-0 bg-white px-4 pb-2.5 text-center text-[0.6875rem] leading-snug text-muted">{copy.disclaimer}</p>
        </div>
      )}

      {/* Float and pulse only while closed, so the button holds still under an open panel. */}
      <div className={cn('relative', !open && 'motion-safe:animate-chat-float')}>
      {!open && <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-full bg-accent motion-safe:animate-chat-pulse motion-reduce:hidden" />}
      <button
        ref={toggleRef}
        data-magnetic
        type="button"
        onClick={() => (open ? close() : setOpen(true))}
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
        aria-label={open ? copy.close : copy.open}
        className="relative flex size-14 items-center justify-center rounded-full bg-primary text-accent shadow-lg ring-2 ring-accent/70 hover:scale-110 motion-safe:transition-transform"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" className={cn('size-6', open && 'hidden')} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-4.9A8 8 0 1 1 21 12Z" /><path d="M8.5 10.5h7M8.5 13.5h4.5" /></svg>
        <svg aria-hidden="true" viewBox="0 0 24 24" className={cn('size-5', !open && 'hidden')} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6 6 18" /></svg>
      </button>
      </div>
    </div>
  );
}

function Bubble({ from, children }: { from: Message['from']; children: ReactNode }) {
  return (
    <div data-from={from} className={cn('max-w-[85%] px-4 py-2.5 text-sm leading-relaxed whitespace-pre-line shadow-sm motion-safe:animate-bubble-in', from === 'bot' ? 'origin-bottom-left rounded-2xl rounded-bl-sm bg-white text-foreground' : 'origin-bottom-right self-end rounded-2xl rounded-br-sm bg-primary text-primary-foreground')}>
      {children}
    </div>
  );
}

function ActionLink({ href, newTab, onNavigate, children }: { href: string; newTab: string; onNavigate: () => void; children: ReactNode }) {
  const className = 'mt-2.5 flex w-fit items-center gap-1.5 rounded-full bg-accent px-3.5 py-1.5 text-xs font-semibold text-accent-foreground hover:bg-accent/85';
  if (href.startsWith('/')) return <Link href={href} onClick={onNavigate} className={className}>{children} <span aria-hidden="true">→</span></Link>;
  const external = href.startsWith('http');
  return (
    <a href={href} className={className} {...(external && { target: '_blank', rel: 'noopener noreferrer' })}>
      {children} <span aria-hidden="true">↗</span>{external && <span className="sr-only">{newTab}</span>}
    </a>
  );
}
