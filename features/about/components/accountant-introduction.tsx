import { SectionContainer } from '@/components/shared/section-container';
import { Reveal } from '@/components/shared/reveal';
import { SectionHeading } from '@/components/shared/section-heading';
import { site } from '@/config/site';

export function AccountantIntroduction() {
  return (
    <SectionContainer aria-labelledby="accountant-title" className="bg-secondary">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <SectionHeading id="accountant-title" eyebrow="About the accountant">A public introduction.<br />
            <span className="text-muted">A personal perspective.</span>
          </SectionHeading>
        </Reveal>
        <Reveal stagger={1}>
          <p className="text-lg leading-relaxed">In her public introduction, the accountant describes herself as Venezuelan and shares her focus on helping Hispanic families with their U.S. taxes.</p>
          <p className="mt-5 text-base leading-relaxed text-muted">That introduction mentions that she had lived in the United States for 10 years at the time of the post. This is a personal background detail, not a statement of tax preparation experience.</p>
          <p className="mt-5 text-sm leading-relaxed text-muted">Her full name, professional credentials, and years of tax preparation experience remain unverified.</p>
          <a href={site.sources.welcome} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-11 items-center border-b border-border text-sm font-medium hover:underline">Read her introduction on Instagram<span className="sr-only"> (opens in a new tab)</span>
          </a>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
