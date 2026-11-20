import Link from 'next/link';
import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

type PrimaryCTAProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: 'accent' | 'dark' | 'light' | 'outline';
};
const variants = {
  accent: 'bg-accent text-accent-foreground hover:bg-accent/90',
  dark: 'bg-primary text-white hover:bg-primary/90',
  light: 'bg-white text-primary hover:bg-background',
  outline: 'border border-current bg-transparent hover:bg-foreground/5',
} as const;
export function PrimaryCTA({ variant = 'accent', className, children, ...props }: PrimaryCTAProps) {
  return <Link className={cn('inline-flex min-h-12 items-center justify-center gap-5 rounded-full px-6 py-3.5 text-xs font-semibold tracking-wide motion-safe:transition-colors motion-safe:duration-200', variants[variant], className)} {...props}>{children}</Link>;
}
