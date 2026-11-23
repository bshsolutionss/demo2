'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface NavigationLinkProps {
  href: string;
  label: string;
  mobile?: boolean;
  onClick?: () => void;
}

/** Home (`/es`) matches exactly; section links also match nested pages and in-page anchors. */
function isActive(pathname: string, href: string) {
  if (pathname === href) return true;
  const isHome = href.split('/').filter(Boolean).length === 1;
  return !isHome && pathname.startsWith(`${href}/`);
}

export function NavigationLink({ href, label, mobile = false, onClick }: NavigationLinkProps) {
  const active = isActive(usePathname(), href);

  return (
    <Link
      href={href}
      aria-current={active ? 'page' : undefined}
      onClick={onClick}
      className={cn(
        'group/link relative flex items-center justify-between motion-safe:transition-colors',
        mobile
          ? 'min-h-14 border-b border-white/10 py-3 text-xl tracking-tight'
          : 'min-h-10 px-1 text-xs font-medium whitespace-nowrap',
        active ? 'text-accent' : 'text-white/75 hover:text-white',
      )}
    >
      {label}
      {mobile ? (
        <span aria-hidden="true" className={cn('text-lg motion-safe:transition-transform motion-safe:group-hover/link:translate-x-1', active ? 'text-accent' : 'text-white/30')}>→</span>
      ) : (
        <span aria-hidden="true" className={cn(
          'absolute inset-x-1 bottom-1.5 h-px origin-left bg-accent motion-safe:transition-transform motion-safe:duration-200',
          active ? 'scale-x-100' : 'scale-x-0 group-hover/link:scale-x-100',
        )} />
      )}
    </Link>
  );
}
