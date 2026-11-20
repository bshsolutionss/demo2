import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface BrandProps { className?: string; imageClassName?: string; }
export function Brand({ className, imageClassName }: BrandProps) {
  return (
    <Link href="/" className={cn('inline-flex shrink-0', className)} aria-label="EH Tax & Business Solutions home">
      <Image
        src="/logos/eh-tax-logo-transparent.png"
        alt="EH Tax & Business Solutions — Your Goals. Our Priority."
        width={1446}
        height={1088}
        sizes="(max-width: 640px) 112px, 144px"
        className={cn('h-auto object-contain', imageClassName ?? 'w-28 sm:w-36')}
      />
    </Link>
  );
}
