import Link from 'next/link';
import { SectionContainer } from '@/components/shared/section-container';
import { SectionHeading } from '@/components/shared/section-heading';
import { PrimaryCTA } from '@/components/shared/primary-cta';
import { Reveal } from '@/components/shared/reveal';
import type { RevealStagger } from '@/config/motion';
import { services } from '@/features/services/data/services';
import { localizePath } from '@/i18n/config';
import { getDictionary } from '@/i18n/server';

export async function ServicesPreview() {
  const { locale, t } = await getDictionary();
  const servicesPath = localizePath(locale, '/services');
  return (
    <SectionContainer id="services-preview" aria-labelledby="services-title" className="bg-white">
      <div className="mb-10 grid items-end gap-7 lg:grid-cols-[1fr_19rem]">
        <Reveal>
          <SectionHeading id="services-title" eyebrow={t.servicesPreview.eyebrow}>{t.servicesPreview.title1}<br />
            <span className="text-muted">{t.servicesPreview.title2}</span>
          </SectionHeading>
        </Reveal>
        <Reveal stagger={1}>
          <p className="text-base leading-relaxed text-muted">{t.servicesPreview.intro}</p>
        </Reveal>
      </div>
      <div className="border-b border-border">
        {services.map((service, index) => {
          const copy = t.services.items[service.key];
          return (
            <Reveal key={service.slug} stagger={Math.min(index, 2) as RevealStagger}>
              <Link href={`${servicesPath}#${service.slug}`} className="group grid min-h-24 grid-cols-[1fr_auto] items-center gap-3 border-t border-border py-6 hover:bg-background focus-visible:bg-background motion-safe:transition-[background-color,padding] motion-safe:duration-300 motion-safe:hover:px-3 lg:grid-cols-[23%_1fr_auto]">
                <span className="col-span-2 text-[0.625rem] tracking-widest text-muted uppercase lg:col-span-1">{copy.category}</span>
                <h3 className="text-subheading font-medium group-hover:text-accent-ink motion-safe:transition-colors">{copy.title}</h3>
                <span aria-hidden="true" className="flex size-10 items-center justify-center rounded-full border border-border text-xl group-hover:border-accent group-hover:bg-accent/15 motion-safe:transition-[color,background-color,transform] motion-safe:duration-300 motion-safe:group-hover:rotate-90">+</span>
              </Link>
            </Reveal>
          );
        })}
      </div>
      <Reveal className="mt-9">
        <PrimaryCTA href={servicesPath}>{t.servicesPreview.cta}</PrimaryCTA>
      </Reveal>
    </SectionContainer>
  );
}
