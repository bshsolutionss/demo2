import { SectionContainer } from '@/components/shared/section-container';
import { SplitWords } from '@/components/shared/split-words';
import { Reveal } from '@/components/shared/reveal';
import { PrimaryCTA } from '@/components/shared/primary-cta';
import { site } from '@/config/site';
import { format } from '@/i18n/config';
import { getDictionary } from '@/i18n/server';

export async function ContactOptions() {
  const { t } = await getDictionary();
  const copy = t.contact.options;
  const keyword = site.businessFormation.keyword;
  return (
    <SectionContainer className="bg-white" aria-labelledby="contact-options-title">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
        <Reveal>
          <p className="mb-5 text-xs tracking-widest text-muted uppercase">{copy.eyebrow}</p>
          <h2 id="contact-options-title" className="text-heading font-medium"><SplitWords>{copy.title1}<br />{copy.title2}</SplitWords></h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted">{t.common.appointmentInstruction} {copy.howTo}</p>
          <PrimaryCTA href={site.appointmentHref} target="_blank" rel="noopener noreferrer" newTabLabel={t.common.newTab} className="mt-7">{t.common.requestViaInstagram}</PrimaryCTA>
          <div className="mt-10 border-t border-border pt-7">
            <h3 className="text-lg font-medium">{copy.businessTitle}</h3>
            <p className="mt-3 max-w-md text-base leading-relaxed text-muted">{copy.businessBefore}<strong className="font-semibold text-foreground">{keyword}</strong>{copy.businessAfter}</p>
            <PrimaryCTA href={site.businessFormation.emailHref} variant="outline" className="mt-5">{format(t.services.emailKeyword, { keyword })}</PrimaryCTA>
          </div>
          <a href={`mailto:${site.email}`} className="mt-8 inline-block break-all border-b border-border pb-2 text-xl font-medium text-accent-ink underline-offset-4 hover:underline sm:text-2xl">{site.email}</a>
          <p className="mt-3 text-sm text-muted">{copy.emailNote}</p>
        </Reveal>
        <Reveal stagger={1}>
          <dl className="divide-y divide-border border-y border-border">
            <div className="py-6">
              <dt className="text-xs tracking-widest text-muted uppercase">{t.about.business.labels.serviceArea}</dt>
              <dd className="mt-3 text-lg">{t.common.serviceArea}</dd>
            </div>
            <div className="py-6">
              <dt className="text-xs tracking-widest text-muted uppercase">{copy.locationLabel}</dt>
              <dd className="mt-3 text-base leading-relaxed">
                {t.common.locationReference}
                <span className="mt-3 block text-sm text-muted">{copy.locationNote}</span>
              </dd>
            </div>
            <div className="py-6">
              <dt className="text-xs tracking-widest text-muted uppercase">{t.about.business.labels.languages}</dt>
              <dd className="mt-3 text-lg">{t.common.languages}</dd>
            </div>
          </dl>
          <p className="mt-7 text-xs tracking-widest text-muted uppercase">{copy.social}</p>
          <div className="mt-4 flex flex-wrap gap-3">{site.social.map(social => <PrimaryCTA key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" newTabLabel={t.common.newTab} variant="outline">{social.label}</PrimaryCTA>)}</div>
          <a href={site.sources.welcome} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-11 items-center text-sm underline-offset-4 hover:underline">{copy.welcomeLink}<span className="sr-only">{t.common.newTabInstagram}</span></a>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
