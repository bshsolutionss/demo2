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

export function NavigationLink({ href, label, mobile = false, onClick }: NavigationLinkProps) {
  const active = usePathname() === href;

  return (
    <Link
      href={href}
      aria-current={active ? 'page' : undefined}
      onClick={onClick}
      className={cn(
        'group/link relative flex items-center justify-between motion-safe:transition-colors',
        mobile
          ? 'min-h-16 border-b border-white/10 py-4 text-2xl tracking-tight'
          : 'min-h-12 px-1 text-sm font-medium',
        active ? 'text-accent' : 'text-white/70 hover:text-white',
      )}
    >
      {label}
      {mobile ? (
        <span aria-hidden="true" className={cn('text-lg', active ? 'text-accent' : 'text-white/30')}>{active ? '↗' : '→'}</span>
      ) : (
        <span aria-hidden="true" className={cn(
          'absolute inset-x-1 bottom-1 h-px origin-left bg-accent motion-safe:transition-transform motion-safe:duration-200',
          active ? 'scale-x-100' : 'scale-x-0 group-hover/link:scale-x-100',
        )} />
      )}
    </Link>
  );
}
