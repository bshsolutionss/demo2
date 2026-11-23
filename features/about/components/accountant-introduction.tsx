import { SectionContainer } from '@/components/shared/section-container';
import { Reveal } from '@/components/shared/reveal';
import { SectionHeading } from '@/components/shared/section-heading';
import { site } from '@/config/site';
import { getDictionary } from '@/i18n/server';

export async function AccountantIntroduction() {
  const { t } = await getDictionary();
  const copy = t.about.accountant;
  return (
    <SectionContainer aria-labelledby="accountant-title" className="bg-secondary">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <SectionHeading id="accountant-title" eyebrow={copy.eyebrow}>{copy.title1}<br />
            <span className="text-muted">{copy.title2}</span>
          </SectionHeading>
        </Reveal>
        <Reveal stagger={1}>
          <p className="text-lg leading-relaxed">{copy.p1}</p>
          <p className="mt-5 text-base leading-relaxed text-muted">{copy.p2}</p>
          <p className="mt-5 text-sm leading-relaxed text-muted">{copy.p3}</p>
          <a href={site.sources.welcome} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-11 items-center border-b border-border text-sm font-medium hover:underline">{copy.link}<span className="sr-only">{t.common.newTab}</span></a>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
