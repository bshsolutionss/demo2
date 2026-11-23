import { SectionContainer } from '@/components/shared/section-container';
import { SectionHeading } from '@/components/shared/section-heading';
import { Reveal } from '@/components/shared/reveal';
import { getDictionary } from '@/i18n/server';

export async function MessageGuide() {
  const { t } = await getDictionary();
  const copy = t.messageGuide;
  return (
    <SectionContainer aria-labelledby="message-guide-title">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <SectionHeading id="message-guide-title" eyebrow={copy.eyebrow}>{copy.title1}<br />
            <span className="text-muted">{copy.title2}</span>
          </SectionHeading>
          <ol className="mt-10 space-y-5">
            {copy.items.map((item, index) => (
              <li key={item} className="group flex gap-4 text-base leading-relaxed">
                <span aria-hidden="true" className="flex size-8 shrink-0 items-center justify-center rounded-full border border-accent text-xs font-semibold text-accent-ink group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">{index + 1}</span>
                <span className="pt-1">{item}</span>
              </li>
            ))}
          </ol>
        </Reveal>
        <Reveal stagger={1} className="group/reveal self-center">
          <figure className="rounded-sm bg-primary p-7 text-white shadow-xl lg:p-10">
            <figcaption className="text-xs tracking-widest text-white/60 uppercase">{copy.exampleLabel}</figcaption>
            {/* The example "sends" after the card settles, like a message arriving. */}
            <blockquote className="mt-6 origin-bottom-right rounded-2xl rounded-br-sm bg-accent px-5 py-4 text-base leading-relaxed text-accent-foreground motion-safe:transition-[opacity,transform] motion-safe:delay-700 motion-safe:duration-500 motion-safe:ease-emphasized motion-safe:group-data-[pending=true]/reveal:translate-y-3 motion-safe:group-data-[pending=true]/reveal:scale-90 motion-safe:group-data-[pending=true]/reveal:opacity-0">{copy.example}</blockquote>
          </figure>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
