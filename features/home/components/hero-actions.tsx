import Link from 'next/link';
import { PrimaryCTA } from '@/components/shared/primary-cta';
import { motion } from '@/config/motion';
import { site } from '@/config/site';
import { localizePath } from '@/i18n/config';
import { getDictionary } from '@/i18n/server';
import { cn } from '@/lib/utils';

export async function HeroActions() {
  const { locale, t } = await getDictionary();
  return (
    <div className="mt-6">
      <p className={cn('max-w-md text-base leading-relaxed text-muted', motion.hero.description)}>{t.hero.description}</p>
      <div className={cn('mt-7 flex flex-wrap items-center gap-x-6 gap-y-4', motion.hero.action)}>
        <PrimaryCTA href={site.appointmentHref} target="_blank" rel="noopener noreferrer" newTabLabel={t.common.newTab} className="motion-safe:animate-cta-glow">{t.common.requestViaInstagram}</PrimaryCTA>
        <Link href={localizePath(locale, '/services')} className="group inline-flex min-h-11 items-center gap-2 text-sm font-medium underline-offset-4 hover:text-accent-ink hover:underline">
          {t.hero.secondaryCta} <span aria-hidden="true" className="motion-safe:transition-transform motion-safe:group-hover:translate-x-1">→</span>
        </Link>
      </div>
      <p className={cn('mt-10 text-[0.625rem] tracking-widest text-muted uppercase', motion.hero.supporting)}>{t.common.serviceArea} · {t.common.languages}</p>
    </div>
  );
}
