import { SectionContainer } from '@/components/shared/section-container';
import { SectionHeading } from '@/components/shared/section-heading';
import { Reveal } from '@/components/shared/reveal';
import type { RevealStagger } from '@/config/motion';
import { getDictionary } from '@/i18n/server';

export async function WhyEh() {
  const { t } = await getDictionary();
  const copy = t.whyEh;
  return (
    <SectionContainer aria-labelledby="why-eh-title" className="bg-white">
      <Reveal className="mb-12 max-w-3xl">
        <SectionHeading id="why-eh-title" eyebrow={copy.eyebrow}>{copy.title1}<br />
          <span className="text-muted">{copy.title2}</span>
        </SectionHeading>
      </Reveal>
      <ul className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {copy.items.map((item, index) => (
          <li key={item.title}>
            <Reveal stagger={Math.min(index, 3) as RevealStagger} className="group/reveal relative pt-6">
              {/* Accent rule draws in once the card scrolls into view. */}
              <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 bg-border" />
              <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 origin-left bg-accent motion-safe:transition-transform motion-safe:delay-300 motion-safe:duration-[1100ms] motion-safe:ease-emphasized motion-safe:group-data-[pending=true]/reveal:scale-x-0" />
              <h3 className="text-xl font-medium">{item.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted">{item.body}</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </SectionContainer>
  );
}
