import { NextResponse, type NextRequest } from 'next/server';
import { defaultLocale, hasLocale, localeCookie } from '@/i18n/config';

/** Send locale-less URLs to Spanish (primary), or to the language the visitor last chose. */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (hasLocale(pathname.split('/')[1] ?? '')) return;

  const saved = request.cookies.get(localeCookie)?.value ?? '';
  const locale = hasLocale(saved) ? saved : defaultLocale;
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next internals and any file request (icons, images, robots.txt).
  matcher: ['/((?!_next|api|.*\\..*).*)'],
};
