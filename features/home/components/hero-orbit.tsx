import { motion } from '@/config/motion';
import { getDictionary } from '@/i18n/server';
import { cn } from '@/lib/utils';

const TRACK = 'M125 615C91 390 260 124 518 113c145-6 255 89 282 151';

/** Milestones along the path: tax filing → household → business. */
const nodes = [
  { cx: 139, cy: 511, icon: <><path d="M121 489h27l12 12v32h-39z" strokeLinejoin="round" /><path d="M146 490v14h14M130 515h20M130 524h13" /></> },
  { cx: 264, cy: 224, icon: <path d="M245 244v-31l19-13 19 13v31M253 244v-17h22v17M242 244h44" strokeLinejoin="round" /> },
  { cx: 562, cy: 116, icon: <><rect x="540" y="100" width="44" height="32" rx="4" /><path d="M553 100v-7h18v7M541 114h42M558 111v7h8v-7" strokeWidth="2" /></> },
];

/**
 * Hero illustration: a rising path that mirrors the arrow in the EH logo.
 * Shapes are SVG; copy is HTML positioned in the same 800×720 coordinate space, so it stays translatable and crisp.
 * Decorative, since the hero heading carries the same message.
 */
export async function HeroOrbit() {
  const { t } = await getDictionary();
  const copy = t.hero.orbit;

  return (
    <div aria-hidden="true" className="@container relative aspect-[800/720] w-full select-none">
      <svg viewBox="0 0 800 720" fill="none" className="absolute inset-0 size-full overflow-visible">
        <defs>
          <linearGradient id="orbit-track" x1="100" y1="560" x2="650" y2="50" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f1ecdf" /><stop offset=".47" stopColor="#d8c8a2" /><stop offset="1" stopColor="#ebe1cc" />
          </linearGradient>
          <linearGradient id="orbit-seal" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#484540" /><stop offset="1" stopColor="#252421" />
          </linearGradient>
          <filter id="orbit-shadow" x="-50%" y="-50%" width="200%" height="220%">
            <feDropShadow dx="0" dy="13" stdDeviation="14" floodColor="#302c23" floodOpacity=".15" />
          </filter>
        </defs>
        <path d={TRACK} pathLength={1} stroke="url(#orbit-track)" strokeWidth="134" strokeLinecap="round" className={motion.orbit.track} />
        <path d={TRACK} stroke="#fff" strokeOpacity=".6" strokeWidth="1" strokeDasharray="2 12" className={motion.orbit.trail} />
        {nodes.map((node, index) => (
          <g key={node.cx} filter="url(#orbit-shadow)" className={cn('origin-center [transform-box:fill-box]', motion.orbit.node, motion.orbit.nodeDelay[index])}>
            <g className={cn('origin-center [transform-box:fill-box]', motion.orbit.float, motion.orbit.floatDelay[index])}>
              <circle cx={node.cx} cy={node.cy} r="46" fill="url(#orbit-seal)" />
              <g stroke="#fff" strokeWidth="3">{node.icon}</g>
            </g>
          </g>
        ))}
      </svg>

      <div className={cn('absolute top-[46.5%] left-[48.5%] pr-4', motion.orbit.copy)}>
        <p className="text-[clamp(0.625rem,2cqw,1rem)] tracking-wide text-muted uppercase">{copy.eyebrow}</p>
        <p className="mt-[1.5cqw] text-[clamp(1.375rem,4.75cqw,2.75rem)] leading-[1.15] tracking-[-0.04em] text-foreground">
          {copy.title1}<br />{copy.title2}
        </p>
        <span className="mt-[3cqw] block h-[3px] w-[6cqw] min-w-8 bg-accent-ink" />
      </div>

      <div className={cn('absolute top-[76.7%] left-[27%] w-[66%] rounded-lg bg-white p-3 shadow-[0_13px_28px_rgba(48,44,35,.15)] @xl:left-[36.9%] @xl:w-[36.5%] @xl:p-[2.75cqw]', motion.orbit.card)}>
        <div className="flex items-center gap-[1.5cqw]">
          <span className="flex size-[max(1.5rem,3.75cqw)] shrink-0 items-center justify-center rounded-md bg-[#f4ecd9] text-accent-ink">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-1/2"><path d="m5 12 5 5 9-11" /></svg>
          </span>
          <p className="text-[clamp(0.8125rem,2cqw,1.125rem)] leading-tight font-bold text-foreground">{copy.cardTitle}</p>
        </div>
        <p className="mt-[2cqw] text-[clamp(0.5625rem,1.5cqw,0.8125rem)] leading-snug tracking-wide text-muted uppercase">{copy.cardSubtitle}</p>
        <span className="mt-[2cqw] block h-px bg-[#e9e7e1]">
          <span className={cn('block h-full origin-left bg-accent', motion.orbit.progress)} />
        </span>
      </div>
    </div>
  );
}
