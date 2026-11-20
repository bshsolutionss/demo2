import Link from 'next/link';
import { SectionContainer } from '@/components/shared/section-container';
import { Reveal } from '@/components/shared/reveal';
import { SectionHeading } from '@/components/shared/section-heading';
import { site } from '@/config/site';

export function BusinessDetails() {
  const details = [
    { label: 'Business', value: site.name },
    { label: 'Service area', value: site.serviceArea },
    { label: 'Languages', value: site.languages },
    { label: 'Who we serve', value: site.clients },
  ];
  return (
    <SectionContainer aria-labelledby="business-details-title" className="bg-white">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <SectionHeading id="business-details-title" eyebrow="The business behind the name">Support for families.<br />A start for entrepreneurs.</SectionHeading>
          <p className="mt-7 max-w-md text-base leading-relaxed text-muted">EH focuses on helping Hispanic families navigate U.S. tax filing, while also supporting small business owners and entrepreneurs with tax preparation and the first steps of company formation.</p>
          <Link href="/contact" className="mt-7 inline-flex min-h-11 items-center text-sm font-semibold text-accent-ink hover:underline">Start a conversation</Link>
          <p className="mt-7 text-sm leading-relaxed text-muted">The welcome post is tagged in Sanford, Florida. An office address has not been verified.</p>
          <a href={site.sources.welcome} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex min-h-11 items-center text-sm underline-offset-4 hover:underline">Read the welcome post<span className="sr-only"> (opens on Instagram in a new tab)</span>
          </a>
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
