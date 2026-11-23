import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const logos = {
  full: { src: '/logos/eh-tax-logo-transparent.png', width: 1446, height: 1088, sizes: '(max-width: 640px) 80px, 144px' },
  monogram: { src: '/logos/eh-monogram.png', width: 1180, height: 585, sizes: '80px' },
} as const;

interface BrandProps { href: string; label: string; alt: string; variant?: keyof typeof logos; className?: string; imageClassName?: string; }
export function Brand({ href, label, alt, variant = 'full', className, imageClassName }: BrandProps) {
  const logo = logos[variant];
  return (
    <Link href={href} className={cn('inline-flex shrink-0', className)} aria-label={label}>
      <Image
        src={logo.src}
        alt={alt}
        width={logo.width}
        height={logo.height}
        preload
        sizes={logo.sizes}
        className={cn('h-auto object-contain', imageClassName ?? 'w-28 sm:w-36')}
      />
    </Link>
  );
}
