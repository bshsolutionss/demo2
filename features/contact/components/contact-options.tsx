import { SectionContainer } from '@/components/shared/section-container';
import { Reveal } from '@/components/shared/reveal';
import { PrimaryCTA } from '@/components/shared/primary-cta';
import { site } from '@/config/site';

export function ContactOptions() {
  return (
    <SectionContainer className="bg-white" aria-labelledby="contact-options-title">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
        <Reveal>
          <p className="mb-5 text-xs tracking-widest text-muted uppercase">Appointments & inquiries</p>
          <h2 id="contact-options-title" className="text-heading font-medium">Start with<br />an Instagram message.</h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted">{site.appointment.instruction} Open the profile and choose Message to get in touch.</p>
          <PrimaryCTA href={site.appointment.href} target="_blank" rel="noopener noreferrer" className="mt-7">Request via Instagram</PrimaryCTA>
          <div className="mt-10 border-t border-border pt-7">
            <h3 className="text-lg font-medium">Planning a business?</h3>
            <p className="mt-3 max-w-md text-base leading-relaxed text-muted">Send <strong className="font-semibold text-foreground">{site.businessFormation.keyword}</strong> by Instagram DM or email to ask about business formation guidance.</p>
            <PrimaryCTA href={site.businessFormation.emailHref} variant="outline" className="mt-5">Email EMPRESA</PrimaryCTA>
          </div>
          <a href={'mailto:' + site.email} className="mt-8 inline-block break-all border-b border-border pb-2 text-xl font-medium text-accent-ink underline-offset-4 hover:underline sm:text-2xl">{site.email}</a>
          <p className="mt-3 text-sm text-muted">Email links open your email app.</p>
        </Reveal>
        <Reveal stagger={1}>
          <dl className="divide-y divide-border border-y border-border">
            <div className="py-6">
              <dt className="text-xs tracking-widest text-muted uppercase">Service area</dt>
              <dd className="mt-3 text-lg">{site.serviceArea}</dd>
            </div>
            <div className="py-6">
              <dt className="text-xs tracking-widest text-muted uppercase">Location reference</dt>
              <dd className="mt-3 text-base leading-relaxed">{site.locationReference}</dd>
              <p className="mt-3 text-sm leading-relaxed text-muted">The office address is unverified. The location tag is not a confirmed office address.</p>
            </div>
            <div className="py-6">
              <dt className="text-xs tracking-widest text-muted uppercase">Languages</dt>
              <dd className="mt-3 text-lg">{site.languages}</dd>
            </div>
          </dl>
          <p className="mt-7 text-xs tracking-widest text-muted uppercase">Official social channels</p>
          <div className="mt-4 flex flex-wrap gap-3">{site.social.map(social => <PrimaryCTA key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" variant="outline">{social.label}<span className="sr-only"> (opens in a new tab)</span>
          </PrimaryCTA>)}</div>
          <a href={site.sources.welcome} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-11 items-center text-sm underline-offset-4 hover:underline">View the welcome post<span className="sr-only"> (opens on Instagram in a new tab)</span>
          </a>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
