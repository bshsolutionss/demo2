import Link from 'next/link';
import { SectionContainer } from '@/components/shared/section-container';
import { PrimaryCTA } from '@/components/shared/primary-cta';
import { Reveal } from '@/components/shared/reveal';
import { site } from '@/config/site';

export function ContactCTA() {
  return (
    <SectionContainer aria-labelledby="consultation-title">
      <Reveal className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div>
          <p className="mb-5 text-xs tracking-widest text-muted uppercase">Your Goals. Our Priority.</p>
          <h2 id="consultation-title" className="text-heading font-medium">Let’s start a conversation.</h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">{site.appointment.instruction}</p>
        </div>
        <div className="flex shrink-0 flex-col items-start gap-4">
          <PrimaryCTA href={site.appointment.href} target="_blank" rel="noopener noreferrer">Request via Instagram</PrimaryCTA>
          <Link href="/contact" className="inline-flex min-h-11 items-center text-sm underline-offset-4 hover:underline">Email & business inquiries</Link>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
