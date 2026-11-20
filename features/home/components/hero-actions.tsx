import { PrimaryCTA } from '@/components/shared/primary-cta';
import { motion } from '@/config/motion';
import { site } from '@/config/site';
import { cn } from '@/lib/utils';

export function HeroActions() {
  return (
    <div className="mt-6">
      <p className={cn('max-w-96 text-base leading-relaxed text-muted', motion.hero.description)}>U.S. tax preparation for individuals, families, and small businesses. Business formation guidance for your next chapter.</p>
      <div className={cn('mt-7 flex flex-wrap items-center gap-5', motion.hero.action)}>
        <PrimaryCTA href={site.appointment.href} target="_blank" rel="noopener noreferrer">Request via Instagram</PrimaryCTA>
        <span className="text-xs text-muted">{site.languages}</span>
      </div>
      <p className={cn('mt-10 text-[0.625rem] tracking-widest text-muted uppercase', motion.hero.supporting)}>{site.serviceArea} · {site.tagline}</p>
    </div>
  );
}
