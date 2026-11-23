import Link from 'next/link';
import { SectionContainer } from '@/components/shared/section-container';
import { SplitWords } from '@/components/shared/split-words';
import { Reveal } from '@/components/shared/reveal';
import { localizePath } from '@/i18n/config';
import { getDictionary } from '@/i18n/server';

export async function AboutPreview() {
  const { locale, t } = await getDictionary();
  return (
    <SectionContainer className="scroll-expand bg-primary text-white" aria-labelledby="about-preview-title">
      <div className="grid items-center gap-9 lg:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <p className="mb-6 text-xs tracking-widest text-white/60 uppercase">{t.aboutPreview.eyebrow}</p>
          <h2 id="about-preview-title" className="text-heading font-medium"><SplitWords>{t.aboutPreview.title1}<br />
            <span className="text-white/65">{t.aboutPreview.title2}</span></SplitWords>
          </h2>
        </Reveal>
        <Reveal stagger={1}>
          <p className="max-w-md text-lg leading-relaxed text-white/80">{t.aboutPreview.body}</p>
          <Link href={localizePath(locale, '/about')} className="mt-7 inline-flex min-h-12 items-center border-b border-white/40 text-sm font-medium underline-offset-4 hover:border-accent hover:text-accent">{t.aboutPreview.link}</Link>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
