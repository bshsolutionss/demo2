import { SectionContainer } from './section-container';
import { SectionHeading } from './section-heading';
import { Reveal } from './reveal';
import type { RevealStagger } from '@/config/motion';
import { getDictionary } from '@/i18n/server';

interface FaqSectionProps { page: 'home' | 'services' | 'contact'; className?: string; }

/** Native disclosures keep answers readable without JavaScript. */
export async function FaqSection({ page, className }: FaqSectionProps) {
  const { t } = await getDictionary();
  const titleId = `faq-${page}-title`;
  return (
    <SectionContainer aria-labelledby={titleId} className={className}>
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
        <Reveal>
          <SectionHeading id={titleId} eyebrow={t.faq.eyebrow}>{t.faq.title1}<br />
            <span className="text-muted">{t.faq.title2}</span>
          </SectionHeading>
        </Reveal>
        <div className="border-b border-border">
          {t.faq[page].map((item, index) => (
            <Reveal key={item.q} stagger={Math.min(index, 3) as RevealStagger}>
              <details className="group border-t border-border">
                <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-medium hover:text-accent-ink motion-safe:transition-[color,padding] motion-safe:duration-300 motion-safe:hover:pl-2">
                  {item.q}
                  <span aria-hidden="true" className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border text-accent-ink group-open:rotate-45 group-open:border-accent group-open:bg-accent/15 motion-safe:transition-[transform,background-color,border-color] motion-safe:duration-300">+</span>
                </summary>
                {/* Re-runs on every open because the answer goes from display:none to visible. */}
                <p className="max-w-xl pb-6 text-base leading-relaxed text-muted motion-safe:animate-drop-in">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
