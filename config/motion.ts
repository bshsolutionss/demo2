/** Tailwind classes are complete literals so the compiler can discover them. */
export const motion = {
  reducedMotionQuery: '(prefers-reduced-motion: reduce)',
  reveal: {
    threshold: 0.08,
    classes: 'motion-safe:transition-[opacity,transform,clip-path] motion-safe:duration-1000 motion-safe:ease-[cubic-bezier(.22,1,.36,1)] motion-safe:data-[pending=true]:opacity-0',
    variants: {
      rise: 'motion-safe:data-[pending=true]:translate-y-8',
      media: 'motion-safe:[clip-path:inset(0_0_0_0)] motion-safe:data-[pending=true]:[clip-path:inset(0_0_18%_0)] motion-safe:data-[pending=true]:translate-y-6',
    },
    stagger: ['delay-0', 'delay-150', 'delay-300', 'delay-450'] as const,
  },
  hero: {
    navigation: 'motion-safe:animate-fade-in motion-safe:[animation-delay:180ms]',
    eyebrow: 'motion-safe:animate-rise-in motion-safe:[animation-delay:300ms]',
    firstLine: 'motion-safe:animate-line-in motion-safe:[animation-delay:300ms]',
    secondLine: 'motion-safe:animate-line-in motion-safe:[animation-delay:440ms]',
    description: 'motion-safe:animate-rise-in motion-safe:[animation-delay:740ms]',
    action: 'motion-safe:animate-rise-in motion-safe:[animation-delay:860ms]',
    supporting: 'motion-safe:animate-fade-in motion-safe:[animation-delay:1000ms]',
    media: 'motion-safe:animate-media-in',
    layer: 'motion-safe:animate-rise-in motion-safe:[animation-delay:900ms]',
    layerLater: 'motion-safe:animate-rise-in motion-safe:[animation-delay:1100ms]',
    float: 'motion-safe:group-data-[enhanced=true]/media:animate-layer-float group-data-[paused=true]/media:[animation-play-state:paused]!',
    audience: 'motion-safe:group-data-[enhanced=true]/media:animate-audience-type group-data-[paused=true]/media:[animation-play-state:paused]!',
  },
} as const;
export type RevealStagger = 0 | 1 | 2 | 3;
