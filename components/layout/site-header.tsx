import { Container } from './container';
import { DesktopNav } from './desktop-nav';
import { MobileNav } from './mobile-nav';
import { LanguageSwitcher } from './language-switcher';
import { Brand } from '@/components/shared/brand';
import { navigation } from '@/config/navigation';
import { site } from '@/config/site';
import { localizePath } from '@/i18n/config';
import { getDictionary } from '@/i18n/server';

export async function SiteHeader() {
  const { locale, t } = await getDictionary();
  const items = navigation.map(item => ({ label: t.nav[item.key], href: localizePath(locale, item.path) }));
  const cta = { href: site.appointmentHref, newTab: t.common.newTab };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-primary text-primary-foreground shadow-[0_1px_0_rgba(0,0,0,.2)]">
      <Container className="flex h-16 items-center justify-between gap-3 sm:gap-6 lg:h-18">
        <Brand href={localizePath(locale)} label={t.common.brandLabel} alt={t.common.logoAlt} variant="monogram" imageClassName="w-16 sm:w-18 lg:w-20" />
        <DesktopNav items={items} label={t.nav.main} cta={{ ...cta, label: t.nav.book }}>
          <LanguageSwitcher current={locale} label={t.nav.language} />
        </DesktopNav>
        <div className="flex items-center gap-2 sm:gap-3 lg:hidden">
          <LanguageSwitcher current={locale} label={t.nav.language} />
          <MobileNav
            items={items}
            cta={{ ...cta, label: t.common.requestAppointment }}
            labels={{ menu: t.nav.menu, close: t.nav.close, toggle: t.nav.toggle, nav: t.nav.mobile, note: t.nav.mobileNote }}
          />
        </div>
      </Container>
    </header>
  );
}
