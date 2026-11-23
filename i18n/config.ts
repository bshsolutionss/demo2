/** Locale settings shared by the proxy, server components, and client components. Spanish is the primary language. */
export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';
export const localeCookie = 'NEXT_LOCALE';

export const localeNames: Record<Locale, string> = { es: 'Español', en: 'English' };
export const ogLocales: Record<Locale, string> = { es: 'es_US', en: 'en_US' };

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** `/services` + `es` → `/es/services`; `/` + `en` → `/en`. */
export function localizePath(locale: Locale, path = '/'): string {
  return path === '/' ? `/${locale}` : `/${locale}${path}`;
}

/** Swap (or insert) the locale segment of the current pathname. */
export function switchLocalePath(pathname: string, locale: Locale): string {
  const segments = pathname.split('/');
  if (hasLocale(segments[1] ?? '')) segments[1] = locale;
  else segments.splice(1, 0, locale);
  return segments.join('/').replace(/\/$/, '') || `/${locale}`;
}

/** Replace `{name}` placeholders in dictionary strings. */
export function format(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => values[key] ?? match);
}
