import Link from 'next/link';
import { SectionContainer } from '@/components/shared/section-container';
import { Reveal } from '@/components/shared/reveal';

export function AboutPreview() {
  return (
    <SectionContainer className="bg-primary text-white" aria-labelledby="about-preview-title">
      <div className="grid items-center gap-9 lg:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <p className="mb-6 text-xs tracking-widest text-white/60 uppercase">Meet EH</p>
          <h2 id="about-preview-title" className="text-heading font-medium">Your goals.<br />
            <span className="text-white/65">Our priority.</span>
          </h2>
        </Reveal>
        <Reveal stagger={1}>
          <p className="max-w-md text-lg leading-relaxed text-white/80">Serving Central Florida with support in English and Spanish, and a focus on helping Hispanic families navigate U.S. tax filing.</p>
          <Link href="/about" className="mt-7 inline-flex min-h-12 items-center border-b border-white/40 text-sm font-medium underline-offset-4 hover:underline">Get to know EH</Link>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
