import { SectionContainer } from '@/components/shared/section-container';
import { SplitWords } from '@/components/shared/split-words';
import { Reveal } from '@/components/shared/reveal';
import type { RevealStagger } from '@/config/motion';
import { getDictionary } from '@/i18n/server';

export async function OurApproach() {
  const { t } = await getDictionary();
  const copy = t.approach;
  return (
    <SectionContainer aria-labelledby="approach-title" className="scroll-expand bg-primary text-white">
      <Reveal className="mb-12 max-w-3xl">
        <p className="mb-6 text-xs tracking-widest text-white/60 uppercase">{copy.eyebrow}</p>
        <h2 id="approach-title" className="text-heading font-medium"><SplitWords>{copy.title}</SplitWords></h2>
      </Reveal>
      <ul className="grid gap-10 md:grid-cols-3">
        {copy.items.map((item, index) => (
          <li key={item.title} className="group">
            <Reveal stagger={Math.min(index, 3) as RevealStagger} className="group/reveal relative pt-6">
              <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-white/20" />
              <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px origin-left bg-accent motion-safe:transition-transform motion-safe:delay-300 motion-safe:duration-[1100ms] motion-safe:ease-emphasized motion-safe:group-data-[pending=true]/reveal:scale-x-0" />
              <h3 className="text-xl font-medium text-accent motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:translate-x-1">{item.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-white/75">{item.body}</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </SectionContainer>
  );
}
