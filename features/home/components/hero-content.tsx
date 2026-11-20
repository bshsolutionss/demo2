import { HeroActions } from './hero-actions';
import { motion } from '@/config/motion';
import { cn } from '@/lib/utils';
export function HeroContent() {
  return <div className="relative z-10 pt-8 pb-2 lg:py-14">
    <p className={cn('mb-6 inline-block rounded-sm bg-accent/10 px-2.5 py-1.5 text-[0.625rem] font-semibold tracking-widest text-accent-ink uppercase', motion.hero.eyebrow)}>A clearer perspective</p>
    <h1 id="hero-title" className="text-display font-semibold">
      <span className="block overflow-hidden pb-2">
        <span className={cn('block', motion.hero.firstLine)}>Tax clarity.</span>
      </span>
      <span className="block overflow-hidden pb-2">
        <span className={cn('block font-normal', motion.hero.secondLine)}>Business<br className="hidden lg:block" /> confidence.</span>
      </span>
    </h1>
    <HeroActions />
  </div>;
}
