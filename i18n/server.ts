import type { Metadata } from 'next';
import { lang } from 'next/root-params';
import { notFound } from 'next/navigation';
import { hasLocale, localizePath, locales, defaultLocale, type Locale } from './config';
import { es } from './dictionaries/es';
import { en } from './dictionaries/en';

const dictionaries = { es, en } as const;

/** Reads the `[lang]` root segment, so server components need no locale props. */
export async function getLocale(): Promise<Locale> {
  const locale = await lang();
  if (!hasLocale(locale)) notFound();
  return locale;
}

export async function getDictionary() {
  const locale = await getLocale();
  return { locale, t: dictionaries[locale] };
}

/** Canonical and hreflang links for a page that exists in every locale. */
export function alternates(locale: Locale, path: string): Metadata['alternates'] {
  return {
    canonical: localizePath(locale, path),
    languages: {
      ...Object.fromEntries(locales.map(item => [item, localizePath(item, path)])),
      'x-default': localizePath(defaultLocale, path),
    },
  };
}
