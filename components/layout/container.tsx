import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

export function Container({ className, ...props }: ComponentPropsWithoutRef<'div'>) {
  return <div className={cn('mx-auto w-full max-w-screen-2xl px-6 sm:px-10 lg:px-20', className)} {...props} />;
}
