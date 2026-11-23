import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { SplitWords } from './split-words';

interface SectionHeadingProps {
  id: string;
  eyebrow: string;
  children: ReactNode;
  className?: string;
}
export function SectionHeading({ id, eyebrow, children, className }: SectionHeadingProps) {
  return <div className={className}>
    <p className="mb-7 text-xs font-medium tracking-widest uppercase">{eyebrow}</p>
    <h2 id={id} className={cn('text-heading font-normal')}><SplitWords>{children}</SplitWords></h2>
  </div>;
}
