import Link from 'next/link';
import { SectionContainer } from '@/components/shared/section-container';
import { Reveal } from '@/components/shared/reveal';
import { SectionHeading } from '@/components/shared/section-heading';
import { site } from '@/config/site';
import { localizePath } from '@/i18n/config';
import { getDictionary } from '@/i18n/server';

export async function BusinessDetails() {
  const { locale, t } = await getDictionary();
  const copy = t.about.business;
  const details = [
    { label: copy.labels.business, value: site.name },
    { label: copy.labels.serviceArea, value: t.common.serviceArea },
    { label: copy.labels.languages, value: t.common.languages },
    { label: copy.labels.clients, value: t.common.clients },
  ];
  return (
    <SectionContainer aria-labelledby="business-details-title" className="bg-white">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <SectionHeading id="business-details-title" eyebrow={copy.eyebrow}>{copy.title1}<br />{copy.title2}</SectionHeading>
          <p className="mt-7 max-w-md text-base leading-relaxed text-muted">{copy.body}</p>
          <Link href={localizePath(locale, '/contact')} className="mt-7 inline-flex min-h-11 items-center text-sm font-semibold text-accent-ink hover:underline">{copy.link}</Link>
          <p className="mt-7 text-sm leading-relaxed text-muted">{copy.locationNote}</p>
          <a href={site.sources.welcome} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex min-h-11 items-center text-sm underline-offset-4 hover:underline">{copy.welcomeLink}<span className="sr-only">{t.common.newTabInstagram}</span></a>
        </Reveal>
        <Reveal stagger={1}>
          <dl className="divide-y divide-border border-y border-border">
            {details.map(item => <div key={item.label} className="py-6">
              <dt className="text-xs tracking-widest text-muted uppercase">{item.label}</dt>
              <dd className="mt-3 text-xl font-medium">{item.value}</dd>
            </div>)}
          </dl>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
