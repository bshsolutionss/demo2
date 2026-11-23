import Link from 'next/link';
import { Brand } from '@/components/shared/brand';
import { Container } from './container';
import { LanguageSwitcher } from './language-switcher';
import { navigation } from '@/config/navigation';
import { site } from '@/config/site';
import { localizePath } from '@/i18n/config';
import { getDictionary } from '@/i18n/server';

export async function SiteFooter() {
  const { locale, t } = await getDictionary();
  return <footer className="bg-primary pt-14 pb-7 text-white">
    <Container>
      <div className="grid gap-10 border-b border-white/15 pb-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Brand href={localizePath(locale)} label={t.common.brandLabel} alt={t.common.logoAlt} />
          <p className="mt-6 max-w-64 text-sm leading-relaxed text-white/60">
            {t.footer.blurb.map((line, index) => <span key={line} className="block">{line}{index < t.footer.blurb.length - 1 ? ' ' : ''}</span>)}
          </p>
        </div>
        <nav aria-label={t.nav.footer} className="flex flex-col items-start gap-4 text-sm">
          {navigation.map(item => <Link className="underline-offset-4 hover:text-accent hover:underline" key={item.path} href={localizePath(locale, item.path)}>{t.nav[item.key]}</Link>)}
        </nav>
        <div className="space-y-4 text-sm">
          <a href={`mailto:${site.email}`} className="block break-all underline-offset-4 hover:underline">{site.email}</a>
          {site.social.map(item => <a className="block text-white/70 underline-offset-4 hover:text-white hover:underline" key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">{item.label}<span className="sr-only">{t.common.newTab}</span></a>)}
          <LanguageSwitcher current={locale} label={t.nav.language} className="mt-2" />
        </div>
      </div>
      <div className="flex flex-col justify-between gap-4 pt-6 text-xs text-white/55 sm:flex-row">
        <p>© 2026 {site.name}</p>
        <p>{t.common.tagline}</p>
      </div>
    </Container>
  </footer>;
}
