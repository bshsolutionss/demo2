import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { site } from '@/config/site';
import { locales, ogLocales } from '@/i18n/config';
import { alternates, getDictionary } from '@/i18n/server';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { PointerEffects } from '@/components/effects/pointer-effects';
import { ChatWidget } from '@/components/chat/chat-widget';
import { localizePath } from '@/i18n/config';
import '../globals.css';

export function generateStaticParams() {
  return locales.map(lang => ({ lang }));
}

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getDictionary();
  return {
    title: { default: `${site.name} | ${t.common.tagline}`, template: `%s | ${site.name}` },
    description: t.meta.description,
    applicationName: site.name,
    keywords: t.meta.keywords,
    alternates: alternates(locale, '/'),
    openGraph: {
      title: site.name,
      description: t.meta.description,
      type: 'website',
      siteName: site.name,
      locale: ogLocales[locale],
      alternateLocale: locales.filter(item => item !== locale).map(item => ogLocales[item]),
    },
    twitter: { card: 'summary', title: site.name, description: t.meta.description },
    // Keep staging content out of search until assets, services, and launch URL are verified.
    robots: { index: false, follow: false },
    formatDetection: { email: false, telephone: false, address: false },
  };
}

export const viewport: Viewport = {
  themeColor: '#242424',
  colorScheme: 'light',
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const { locale, t } = await getDictionary();
  return <html lang={locale} data-scroll-behavior="smooth">
    <body className="flex min-h-dvh flex-col">
      <a href="#main" className="fixed -top-24 left-5 z-60 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-lg focus:top-4">{t.common.skipToContent}</a>
      <SiteHeader />
      <div className="flex-1">{children}</div>
      <SiteFooter />
      <PointerEffects />
      <ChatWidget
        copy={t.chat}
        newTab={t.common.newTab}
        locale={locale}
        links={{
          instagram: site.appointmentHref,
          email: `mailto:${site.email}`,
          formation: site.businessFormation.emailHref,
          services: localizePath(locale, '/services'),
          checklist: `${localizePath(locale, '/services')}#checklist`,
          contact: localizePath(locale, '/contact'),
        }}
      />
    </body>
  </html>;
}
