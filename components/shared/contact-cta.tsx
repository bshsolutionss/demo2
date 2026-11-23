import Link from 'next/link';
import { SectionContainer } from '@/components/shared/section-container';
import { PrimaryCTA } from '@/components/shared/primary-cta';
import { SplitWords } from './split-words';
import { Reveal } from '@/components/shared/reveal';
import { site } from '@/config/site';
import { localizePath } from '@/i18n/config';
import { getDictionary } from '@/i18n/server';

export async function ContactCTA() {
  const { locale, t } = await getDictionary();
  return (
    <SectionContainer aria-labelledby="consultation-title">
      <Reveal className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div>
          <p className="mb-5 text-xs tracking-widest text-muted uppercase">{t.common.tagline}</p>
          <h2 id="consultation-title" className="text-heading font-medium"><SplitWords>{t.contactCta.title}</SplitWords></h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">{t.common.appointmentInstruction}</p>
        </div>
        <div className="flex shrink-0 flex-col items-start gap-4">
          <PrimaryCTA href={site.appointmentHref} target="_blank" rel="noopener noreferrer" newTabLabel={t.common.newTab}>{t.common.requestViaInstagram}</PrimaryCTA>
          <Link href={localizePath(locale, '/contact')} className="inline-flex min-h-11 items-center text-sm underline-offset-4 hover:underline">{t.contactCta.secondary}</Link>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
