import Link from 'next/link';
import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

type PrimaryCTAProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: 'accent' | 'dark' | 'light' | 'outline';
  /** Screen-reader notice appended when `target="_blank"`, e.g. " (opens in a new tab)". */
  newTabLabel?: string;
};
const variants = {
  accent: 'bg-accent text-accent-foreground shadow-sm hover:bg-accent/90 hover:shadow-md',
  dark: 'bg-primary text-white hover:bg-primary/90',
  light: 'bg-white text-primary hover:bg-background',
  outline: 'border border-current bg-transparent hover:bg-foreground/5',
} as const;

export function PrimaryCTA({ variant = 'accent', newTabLabel, className, children, ...props }: PrimaryCTAProps) {
  return <Link data-magnetic className={cn('inline-flex min-h-12 items-center justify-center gap-5 rounded-full px-6 py-3.5 text-xs font-semibold tracking-wide motion-safe:transition-[color,background-color,box-shadow,translate,scale] motion-safe:duration-500 motion-safe:ease-emphasized motion-safe:active:scale-[.98]', variants[variant], className)} {...props}>
    {children}
    {props.target === '_blank' && newTabLabel && <span className="sr-only">{newTabLabel}</span>}
  </Link>;
}
