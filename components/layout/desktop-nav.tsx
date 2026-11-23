import type { ReactNode } from 'react';
import { PrimaryCTA } from '@/components/shared/primary-cta';
import { NavigationLink } from './navigation-link';

interface DesktopNavProps {
  items: { label: string; href: string }[];
  label: string;
  cta: { href: string; label: string; newTab: string };
  /** Extra controls (language switcher) placed before the call to action. */
  children?: ReactNode;
}

export function DesktopNav({ items, label, cta, children }: DesktopNavProps) {
  return (
    <div className="hidden flex-1 items-center gap-4 lg:flex xl:gap-7">
      <nav aria-label={label} className="flex flex-1 justify-center gap-4 xl:gap-7">
        {items.map(item => <NavigationLink {...item} key={item.href} />)}
      </nav>
      <div className="flex shrink-0 items-center gap-3">
        {children}
        <PrimaryCTA href={cta.href} target="_blank" rel="noopener noreferrer" newTabLabel={cta.newTab} variant="accent" className="min-h-10 gap-2 px-4 py-2 text-[0.6875rem] xl:px-5">
          {cta.label} <span aria-hidden="true">↗</span>
        </PrimaryCTA>
      </div>
    </div>
  );
}
