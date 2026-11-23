'use client';
import type { ReactNode } from 'react';
import { useInView } from '@/hooks/use-in-view';
import { motion, type RevealStagger } from '@/config/motion';
import { cn } from '@/lib/utils';

interface RevealProps { children: ReactNode; className?: string; stagger?: RevealStagger; variant?: keyof typeof motion.reveal.variants; }
export function Reveal({ children, className, stagger = 0, variant = 'rise' }: RevealProps) {
  const ref = useInView();
  return <div ref={ref} className={cn('group/reveal', motion.reveal.classes, motion.reveal.variants[variant], motion.reveal.stagger[stagger], className)}>{children}</div>;
}
