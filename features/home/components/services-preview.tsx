import Link from 'next/link';
import { SectionContainer } from '@/components/shared/section-container';
import { SectionHeading } from '@/components/shared/section-heading';
import { PrimaryCTA } from '@/components/shared/primary-cta';
import { Reveal } from '@/components/shared/reveal';
import { services } from '@/features/services/data/services';

export function ServicesPreview() {
  return (
    <SectionContainer aria-labelledby="services-title" className="bg-white">
      <div className="mb-10 grid items-end gap-7 lg:grid-cols-[1fr_19rem]">
        <Reveal>
          <SectionHeading id="services-title" eyebrow="How we can help">Your priorities.<br />
            <span className="text-muted">Our areas of focus.</span>
          </SectionHeading>
        </Reveal>
        <Reveal stagger={1}>
          <p className="text-base leading-relaxed text-muted">Explore our services and find the right starting point for your conversation with EH.</p>
        </Reveal>
      </div>
      <div className="border-b border-border">
        {services.map((service, index) => (
          <Reveal key={service.slug} stagger={index === 0 ? 0 : index === 1 ? 1 : 2}>
            <Link href={`/services#${service.slug}`} className="group grid min-h-24 grid-cols-[1fr_auto] items-center gap-3 border-t border-border py-6 hover:bg-background focus-visible:bg-background motion-safe:transition-[background-color,padding] motion-safe:duration-300 motion-safe:hover:px-3 lg:grid-cols-[23%_1fr_auto]">
              <span className="col-span-2 text-[0.625rem] tracking-widest text-muted uppercase lg:col-span-1">{service.category}</span>
              <h3 className="text-subheading font-medium group-hover:text-accent-ink motion-safe:transition-colors">{service.title}</h3>
              <span aria-hidden="true" className="flex size-10 items-center justify-center rounded-full border border-border text-xl group-hover:border-accent group-hover:bg-accent/15 motion-safe:transition-[color,background-color,transform] motion-safe:duration-300 motion-safe:group-hover:rotate-90">+</span>
            </Link>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-9">
        <PrimaryCTA href="/services">Explore all services</PrimaryCTA>
      </Reveal>
    </SectionContainer>
  );
}
