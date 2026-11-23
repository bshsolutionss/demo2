import { Reveal } from '@/components/shared/reveal';
import { PrimaryCTA } from '@/components/shared/primary-cta';
import { site } from '@/config/site';
import { format } from '@/i18n/config';
import type { Dictionary } from '@/i18n/dictionaries/es';
import type { BusinessService } from '../data/services';

interface ServiceDetailProps { service: BusinessService; t: Dictionary; }
export function ServiceDetail({ service, t }: ServiceDetailProps) {
  const copy = t.services.items[service.key];
  const keyword = 'inquiryKeyword' in service ? service.inquiryKeyword : undefined;
  return (
    <article id={service.slug} aria-labelledby={`${service.slug}-title`} className="scroll-mt-32 border-t border-border py-12 first:border-0 first:pt-0 lg:py-16">
      <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
        <Reveal>
          <p className="mb-4 text-xs tracking-widest text-accent-ink uppercase">{copy.category}</p>
          <h2 id={`${service.slug}-title`} className="text-heading font-medium">{copy.title}</h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{copy.description}</p>
          <a href={service.sourceHref} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-11 items-center text-sm underline-offset-4 hover:underline">
            {copy.sourceLabel}<span className="sr-only">{t.common.newTabInstagram}</span>
          </a>
        </Reveal>
        <Reveal stagger={1} className="border-l-2 border-accent pl-6 lg:mt-2">
          <h3 className="text-lg font-medium">{t.services.startTitle}</h3>
          <p className="mt-3 text-base leading-relaxed text-muted">{copy.conversation}</p>
          {keyword ? (
            <div className="mt-6 flex flex-wrap gap-3">
              <PrimaryCTA href={site.appointmentHref} target="_blank" rel="noopener noreferrer" newTabLabel={t.common.newTab}>{format(t.services.dmKeyword, { keyword })}</PrimaryCTA>
              <PrimaryCTA href={site.businessFormation.emailHref} variant="outline">{format(t.services.emailKeyword, { keyword })}</PrimaryCTA>
            </div>
          ) : (
            <PrimaryCTA href={site.appointmentHref} target="_blank" rel="noopener noreferrer" newTabLabel={t.common.newTab} className="mt-6">{t.common.requestViaInstagram}</PrimaryCTA>
          )}
        </Reveal>
      </div>
    </article>
  );
}
