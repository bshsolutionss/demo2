import { SectionContainer } from '@/components/shared/section-container';
import { SectionHeading } from '@/components/shared/section-heading';
import { Reveal } from '@/components/shared/reveal';
import type { RevealStagger } from '@/config/motion';
import { getDictionary } from '@/i18n/server';

export async function TaxEducationSection() {
  const { t } = await getDictionary();
  const copy = t.taxEducation;
  return (
    <SectionContainer id="tax-education" aria-labelledby="tax-education-title" className="bg-white">
      <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_20rem] lg:items-end">
        <Reveal>
          <SectionHeading id="tax-education-title" eyebrow={copy.eyebrow}>{copy.title1}<br />
            <span className="text-muted">{copy.title2}</span>
          </SectionHeading>
        </Reveal>
        <Reveal stagger={1}>
          <p className="text-base leading-relaxed text-muted">{copy.intro}</p>
        </Reveal>
      </div>
      <div className="grid gap-x-16 gap-y-12 md:grid-cols-2">
        {copy.topics.map((topic, index) => (
          <Reveal key={topic.title} stagger={Math.min(index, 3) as RevealStagger}>
            <h3 className="mb-5 text-xl font-medium">{topic.title}</h3>
            <ul className="border-b border-border">
              {topic.posts.map(post => <li key={post.href}>
                <a href={post.href} target="_blank" rel="noopener noreferrer" className="group flex min-h-16 items-center justify-between gap-5 border-t border-border py-4 text-sm leading-relaxed hover:text-accent-ink">
                  <span>{post.title}<span className="sr-only">{t.common.newTabInstagram}</span></span>
                  <span aria-hidden="true" className="text-xl text-accent-ink motion-safe:transition-transform motion-safe:group-hover:rotate-90">+</span>
                </a>
              </li>)}
            </ul>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
