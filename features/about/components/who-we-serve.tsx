import { SectionContainer } from '@/components/shared/section-container';
import { SectionHeading } from '@/components/shared/section-heading';
import { Reveal } from '@/components/shared/reveal';
import type { RevealStagger } from '@/config/motion';
import { getDictionary } from '@/i18n/server';

export async function WhoWeServe() {
  const { t } = await getDictionary();
  const copy = t.whoWeServe;
  return (
    <SectionContainer aria-labelledby="who-we-serve-title">
      <Reveal className="mb-12 max-w-3xl">
        <SectionHeading id="who-we-serve-title" eyebrow={copy.eyebrow}>{copy.title1}<br />
          <span className="text-muted">{copy.title2}</span>
        </SectionHeading>
      </Reveal>
      <ul className="grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
        {copy.items.map((item, index) => (
          <li key={item.title} className="group relative bg-background hover:bg-white motion-safe:transition-colors motion-safe:duration-300">
            <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-accent group-hover:scale-x-100 motion-safe:transition-transform motion-safe:duration-500" />
            <Reveal stagger={Math.min(index, 3) as RevealStagger} className="flex h-full flex-col p-7 lg:p-10">
              <span aria-hidden="true" className="text-sm font-semibold text-accent-ink motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:translate-x-1">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="mt-6 text-2xl font-medium group-hover:text-accent-ink motion-safe:transition-colors">{item.title}</h3>
              <p className="mt-3 max-w-md text-base leading-relaxed text-muted">{item.body}</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </SectionContainer>
  );
}
