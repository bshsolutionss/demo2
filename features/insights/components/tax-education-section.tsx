import { SectionContainer } from '@/components/shared/section-container';
import { SectionHeading } from '@/components/shared/section-heading';
import { Reveal } from '@/components/shared/reveal';
import { taxEducation } from '../data/tax-education';

export function TaxEducationSection() {
  return (
    <SectionContainer id="tax-education" aria-labelledby="tax-education-title" className="bg-white">
      <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_20rem] lg:items-end">
        <Reveal>
          <SectionHeading id="tax-education-title" eyebrow="Tax education on Instagram">Keep the conversation<br />
            <span className="text-muted">going.</span>
          </SectionHeading>
        </Reveal>
        <Reveal stagger={1}>
          <p className="text-base leading-relaxed text-muted">Explore EH’s published Instagram posts by topic. Each link opens the original post, where you can see its publication date and context.</p>
        </Reveal>
      </div>
      <div className="grid gap-x-16 gap-y-12 md:grid-cols-2">
        {taxEducation.map((topic, index) => (
          <Reveal key={topic.title} stagger={index === 0 ? 0 : index === 1 ? 1 : index === 2 ? 2 : 3}>
            <h3 className="mb-5 text-xl font-medium">{topic.title}</h3>
            <ul className="border-b border-border">
              {topic.posts.map(post => <li key={post.href}>
                <a href={post.href} target="_blank" rel="noopener noreferrer" className="group flex min-h-16 items-center justify-between gap-5 border-t border-border py-4 text-sm leading-relaxed hover:text-accent-ink">
                  <span>{post.title}<span className="sr-only"> (opens on Instagram in a new tab)</span>
                  </span>
                  <span aria-hidden="true" className="text-xl text-accent-ink">+</span>
                </a>
              </li>)}
            </ul>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
