import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionContainer } from '@/components/shared/section-container';
import { PrimaryCTA } from '@/components/shared/primary-cta';
import { navigation } from '@/config/navigation';
import { localizePath } from '@/i18n/config';
import { getDictionary } from '@/i18n/server';

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getDictionary();
  return { title: t.notFound.title };
}

export default async function NotFound() {
  const { locale, t } = await getDictionary();
  return <main id="main" tabIndex={-1}>
    <SectionContainer aria-labelledby="not-found-title" className="min-h-[60dvh]">
      <p className="mb-6 text-xs tracking-widest text-accent-ink uppercase">{t.notFound.eyebrow}</p>
      <h1 id="not-found-title" className="max-w-4xl text-display font-medium">{t.notFound.title1}<br />
        <span className="text-muted">{t.notFound.title2}</span>
      </h1>
      <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">{t.notFound.body}</p>
      <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
        <PrimaryCTA href={localizePath(locale)}>{t.notFound.home}</PrimaryCTA>
        <nav aria-label={t.notFound.helpful} className="flex flex-wrap gap-6 text-sm">
          {navigation.filter(item => item.path !== '/').map(item => (
            <Link key={item.path} href={localizePath(locale, item.path)} className="inline-flex min-h-11 items-center underline-offset-4 hover:text-accent-ink hover:underline">{t.nav[item.key]}</Link>
          ))}
        </nav>
      </div>
    </SectionContainer>
  </main>;
}
