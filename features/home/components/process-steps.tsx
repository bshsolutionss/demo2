import { SectionContainer } from '@/components/shared/section-container';
import { SectionHeading } from '@/components/shared/section-heading';
import { Reveal } from '@/components/shared/reveal';
import type { RevealStagger } from '@/config/motion';
import { getDictionary } from '@/i18n/server';

/** Describes only the owner-confirmed contact flow; no timelines, prices, or outcomes are promised. */
export async function ProcessSteps() {
  const { t } = await getDictionary();
  return (
    <SectionContainer aria-labelledby="process-title">
      <Reveal className="mb-12 max-w-3xl">
        <SectionHeading id="process-title" eyebrow={t.process.eyebrow}>{t.process.title1}<br />
          <span className="text-muted">{t.process.title2}</span>
        </SectionHeading>
      </Reveal>
      <ol className="grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
        {t.process.steps.map((step, index) => (
          <li key={step.title} className="group bg-background hover:bg-white motion-safe:transition-colors motion-safe:duration-300">
            <Reveal stagger={Math.min(index, 3) as RevealStagger} className="flex h-full flex-col p-7 lg:p-10">
              <span aria-hidden="true" className="flex size-11 items-center justify-center rounded-full border border-accent text-sm font-semibold text-accent-ink group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="mt-8 text-xl font-medium"><span className="sr-only">{t.process.stepLabel} {index + 1}: </span>{step.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted">{step.body}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </SectionContainer>
  );
}
