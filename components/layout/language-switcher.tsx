'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { localeCookie, localeNames, locales, switchLocalePath, type Locale } from '@/i18n/config';
import { cn } from '@/lib/utils';

interface LanguageSwitcherProps {
  current: Locale;
  label: string;
  className?: string;
}

/** Remembered for locale-less URLs (see proxy.ts). */
function remember(locale: Locale) {
  document.cookie = `${localeCookie}=${locale}; path=/; max-age=31536000; samesite=lax`;
}

/** Keeps the visitor on the same page when switching language. */
export function LanguageSwitcher({ current, label, className }: LanguageSwitcherProps) {
  const pathname = usePathname();

  return (
    <nav aria-label={label} className={cn('inline-flex shrink-0 items-center rounded-full border border-white/20 p-1', className)}>
      {locales.map(locale => {
        const active = locale === current;
        return (
          <Link
            key={locale}
            href={switchLocalePath(pathname, locale)}
            hrefLang={locale}
            lang={locale}
            aria-label={localeNames[locale]}
            aria-current={active ? 'true' : undefined}
            onClick={() => remember(locale)}
            className={cn(
              'flex min-h-8 min-w-9 items-center justify-center rounded-full px-2 text-[0.625rem] font-semibold tracking-widest uppercase motion-safe:transition-colors',
              active ? 'bg-accent text-accent-foreground' : 'text-white/70 hover:text-white',
            )}
          >
            {locale}
          </Link>
        );
      })}
    </nav>
  );
}
