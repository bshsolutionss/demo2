import type { ReactNode } from 'react';
import { SectionContainer } from './section-container';
import { Reveal } from './reveal';
import { SplitWords } from './split-words';
interface PageIntroProps { eyebrow: string; title: ReactNode; description: string; }
export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return <SectionContainer className="border-b border-border">
    <Reveal>
      <p className="mb-6 text-xs tracking-widest text-accent-ink uppercase">{eyebrow}</p>
      <h1 className="max-w-5xl text-display font-medium"><SplitWords mode="load" step={60} delay={150}>{title}</SplitWords></h1>
    </Reveal>
    <Reveal stagger={1}>
      <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted">{description}</p>
    </Reveal>
  </SectionContainer>;
}
