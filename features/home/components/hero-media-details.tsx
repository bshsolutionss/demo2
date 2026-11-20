import { motion } from '@/config/motion';
import { cn } from '@/lib/utils';

/** Decorative layers share the media player's pause state; the service links remain below the hero. */
export function HeroMediaDetails() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className={cn('absolute top-20 right-6 sm:right-10', motion.hero.layer)}>
        <div className={cn('flex items-center gap-4 border border-white/50 bg-background/95 px-5 py-4 text-primary shadow-xl', motion.hero.float)}>
          <span className="flex size-9 items-center justify-center border border-accent/50 text-accent-ink">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
              <path d="M6 3h8l4 4v14H6zM14 3v5h4M9 12h6M9 16h6" />
            </svg>
          </span>
          <div>
            <p className="text-[0.5625rem] tracking-widest text-muted uppercase">Your filing, in focus</p>
            <p className="mt-1 text-sm font-medium">Tax preparation</p>
          </div>
        </div>
      </div>
      <div className={cn('absolute top-48 left-6 sm:top-56 sm:left-10', motion.hero.layerLater)}>
        <div className={cn('flex items-center gap-3 border border-accent/40 bg-primary/95 px-5 py-4 text-white shadow-xl [animation-delay:-3s]', motion.hero.float)}>
          <span className="text-lg text-accent">↗</span>
          <div>
            <p className="text-[0.5625rem] tracking-widest text-white/55 uppercase">Your next chapter</p>
            <p className="mt-1 text-sm font-medium">Business formation</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-24 left-6 text-white sm:left-10">
        <p className="mb-3 text-[0.5625rem] tracking-widest text-white/75 uppercase">Support for</p>
        <div className="grid min-h-7 border-l-2 border-accent pl-3 text-lg font-medium tracking-tight">
          <span className={cn('col-start-1 row-start-1 whitespace-nowrap', motion.hero.audience)}>Individuals &amp; families</span>
          <span className={cn('col-start-1 row-start-1 hidden whitespace-nowrap [animation-delay:6s] motion-safe:group-data-[enhanced=true]/media:block', motion.hero.audience)}>Small business owners</span>
          <span className={cn('col-start-1 row-start-1 hidden whitespace-nowrap [animation-delay:12s] motion-safe:group-data-[enhanced=true]/media:block', motion.hero.audience)}>Entrepreneurs</span>
        </div>
      </div>
    </div>
  );
}
