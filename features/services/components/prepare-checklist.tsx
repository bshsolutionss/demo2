import { SectionContainer } from '@/components/shared/section-container';
import { SectionHeading } from '@/components/shared/section-heading';
import { Reveal } from '@/components/shared/reveal';
import type { RevealStagger } from '@/config/motion';
import { getDictionary } from '@/i18n/server';

/** General document guidance only; EH confirms what applies to each client. */
export async function PrepareChecklist() {
  const { t } = await getDictionary();
  const copy = t.prepare;
  return (
    <SectionContainer id="checklist" aria-labelledby="checklist-title" className="bg-white">
      <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_24rem] lg:items-end">
        <Reveal>
          <SectionHeading id="checklist-title" eyebrow={copy.eyebrow}>{copy.title1}<br />
            <span className="text-muted">{copy.title2}</span>
          </SectionHeading>
        </Reveal>
        <Reveal stagger={1}>
          <p className="text-base leading-relaxed text-muted">{copy.intro}</p>
        </Reveal>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {copy.groups.map((group, index) => (
          <Reveal key={group.title} stagger={Math.min(index, 3) as RevealStagger} className="group/reveal h-full">
            <div className="h-full rounded-sm border border-border bg-background p-7 hover:border-accent/60 hover:shadow-lg motion-safe:transition-[transform,box-shadow,border-color] motion-safe:duration-300 motion-safe:hover:-translate-y-1 lg:p-8">
            <h3 className="text-xl font-medium">{group.title}</h3>
            <ul className="mt-6 space-y-4">
              {group.items.map((item, itemIndex) => (
                <li key={item} className="flex gap-3 text-base leading-relaxed text-muted">
                  {/* Each tick draws itself in sequence once the card is revealed. */}
                  <svg aria-hidden="true" viewBox="0 0 20 20" className="mt-1 size-4 shrink-0 text-accent-ink" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m4 10.5 4 4 8-9" pathLength={1} style={{ transitionDelay: `${400 + itemIndex * 120}ms` }} className="[stroke-dasharray:1] motion-safe:transition-[stroke-dashoffset] motion-safe:duration-500 motion-safe:group-data-[pending=true]/reveal:[stroke-dashoffset:1]" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
