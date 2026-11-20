import type { ComponentPropsWithoutRef } from 'react';
import { Container } from '@/components/layout/container';
import { cn } from '@/lib/utils';

export function SectionContainer({ className, children, ...props }: ComponentPropsWithoutRef<'section'>) {
  return <section className={cn('py-section', className)} {...props}>
    <Container>{children}</Container>
  </section>;
}
