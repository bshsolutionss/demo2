import { Reveal } from '@/components/shared/reveal';
import { PrimaryCTA } from '@/components/shared/primary-cta';
import { site } from '@/config/site';
import type { BusinessService } from '../data/services';

interface ServiceDetailProps { service: BusinessService; }
export function ServiceDetail({ service }: ServiceDetailProps) {
  return (
    <article id={service.slug} aria-labelledby={`${service.slug}-title`} className="scroll-mt-32 border-t border-border py-12 first:border-0 first:pt-0 lg:py-16">
      <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
        <Reveal>
          <p className="mb-4 text-xs tracking-widest text-accent-ink uppercase">{service.category}</p>
          <h2 id={`${service.slug}-title`} className="text-heading font-medium">{service.title}</h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{service.description}</p>
          <a href={service.source.href} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-11 items-center text-sm underline-offset-4 hover:underline">
            {service.source.label}<span className="sr-only"> (opens on Instagram in a new tab)</span>
          </a>
        </Reveal>
        <Reveal stagger={1} className="border-l-2 border-accent pl-6 lg:mt-2">
          <h3 className="text-lg font-medium">Start with a conversation.</h3>
          <p className="mt-3 text-base leading-relaxed text-muted">{service.conversation}</p>
          {service.inquiryKeyword ? (
            <div className="mt-6 flex flex-wrap gap-3">
              <PrimaryCTA href={site.appointment.href} target="_blank" rel="noopener noreferrer">DM {service.inquiryKeyword} on Instagram</PrimaryCTA>
              <PrimaryCTA href={site.businessFormation.emailHref} variant="outline">Email {service.inquiryKeyword}</PrimaryCTA>
            </div>
          ) : (
            <PrimaryCTA href={site.appointment.href} target="_blank" rel="noopener noreferrer" className="mt-6">Request via Instagram</PrimaryCTA>
          )}
        </Reveal>
      </div>
    </article>
  );
}
