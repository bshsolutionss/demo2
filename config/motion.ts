/**
 * Single source of truth for motion. Tailwind classes are complete literals so the compiler can find them.
 *
 * Rhythm: interactions 300ms, reveals 900–1100ms, on `ease-emphasized`. Reveal stagger steps are 120ms.
 */
export const motion = {
  reducedMotionQuery: '(prefers-reduced-motion: reduce)',
  reveal: {
    threshold: 0.12,
    classes: 'motion-safe:transition-[opacity,transform] motion-safe:duration-[900ms] motion-safe:ease-emphasized motion-safe:data-[pending=true]:opacity-0',
    variants: {
      rise: 'motion-safe:data-[pending=true]:translate-y-8',
      media: 'motion-safe:data-[pending=true]:translate-y-6',
    },
    stagger: ['delay-0', 'delay-[120ms]', 'delay-[240ms]', 'delay-[360ms]'] as const,
  },
  hero: {
    eyebrow: 'motion-safe:animate-rise-in motion-safe:[animation-delay:300ms]',
    firstLine: 'motion-safe:animate-line-in motion-safe:[animation-delay:300ms]',
    secondLine: 'motion-safe:animate-line-in motion-safe:[animation-delay:440ms]',
    description: 'motion-safe:animate-rise-in motion-safe:[animation-delay:740ms]',
    action: 'motion-safe:animate-rise-in motion-safe:[animation-delay:860ms]',
    supporting: 'motion-safe:animate-fade-in motion-safe:[animation-delay:1000ms]',
    media: 'motion-safe:animate-fade-in',
  },
  /** Hero orbit: the path draws in, milestones pop along it, then copy and card settle. */
  orbit: {
    track: 'motion-safe:[stroke-dasharray:1_1] motion-safe:animate-orbit-draw motion-safe:[animation-delay:200ms]',
    trail: 'motion-safe:animate-fade-in motion-safe:[animation-delay:1400ms]',
    node: 'motion-safe:animate-node-in',
    nodeDelay: ['motion-safe:[animation-delay:500ms]', 'motion-safe:[animation-delay:850ms]', 'motion-safe:[animation-delay:1200ms]'] as const,
    float: 'motion-safe:animate-node-float',
    floatDelay: ['motion-safe:[animation-delay:-1s]', 'motion-safe:[animation-delay:-3s]', 'motion-safe:[animation-delay:-5s]'] as const,
    copy: 'motion-safe:animate-rise-in motion-safe:[animation-delay:900ms]',
    card: 'motion-safe:animate-rise-in motion-safe:[animation-delay:1200ms]',
    progress: 'motion-safe:animate-grow-x motion-safe:[animation-delay:1700ms]',
  },
} as const;
export type RevealStagger = 0 | 1 | 2 | 3;
