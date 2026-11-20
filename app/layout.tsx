import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { site } from '@/config/site';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import './globals.css';

export const metadata: Metadata = {
  title: site.name,
  description: site.description,
  openGraph: { title: site.name, description: site.description, type: 'website', locale: 'en_US' },
  // Keep staging content out of search until assets, services, and launch URL are verified.
  robots: { index: false, follow: false },
  icons: { icon: '/logos/eh-tax-logo-transparent.png' },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en" data-scroll-behavior="smooth">
    <body>
      <a href="#main" className="fixed -top-24 left-5 z-60 bg-background px-5 py-3 text-foreground focus:top-4">Skip to content</a>
      <SiteHeader />{children}<SiteFooter />
    </body>
  </html>;
}
