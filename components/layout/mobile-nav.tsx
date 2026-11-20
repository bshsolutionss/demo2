'use client';

import { useRef } from 'react';
import { navigation } from '@/config/navigation';
import { site } from '@/config/site';
import { PrimaryCTA } from '@/components/shared/primary-cta';
import { NavigationLink } from './navigation-link';

export function MobileNav() {
  const ref = useRef<HTMLDetailsElement>(null);

  function close(restoreFocus = false) {
    if (!ref.current) return;
    ref.current.open = false;
    if (restoreFocus) ref.current.querySelector('summary')?.focus();
  }

  // A native disclosure keeps navigation usable before hydration and without JavaScript.
  return (
    <details
      suppressHydrationWarning
      ref={ref}
      className="group lg:hidden"
      onKeyDown={event => { if (event.key === 'Escape') close(true); }}
      onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) close(); }}
    >
      <summary aria-label="Toggle navigation" className="flex min-h-12 cursor-pointer list-none items-center gap-4 rounded-full border border-white/20 px-5 text-sm text-white hover:border-accent">
        <span className="group-open:hidden">Menu</span>
        <span className="hidden group-open:inline">Close</span>
        <span aria-hidden="true" className="relative flex h-4 w-4 items-center">
          <span className="absolute h-px w-4 -translate-y-1 bg-current group-open:translate-y-0 group-open:rotate-45 motion-safe:transition-transform" />
          <span className="absolute h-px w-4 translate-y-1 bg-current group-open:translate-y-0 group-open:-rotate-45 motion-safe:transition-transform" />
        </span>
      </summary>
      <nav aria-label="Mobile navigation" className="absolute inset-x-0 top-full max-h-[calc(100dvh-6rem)] overflow-y-auto border-b border-white/15 bg-primary px-6 pb-8 pt-3 shadow-xl sm:px-10">
        <ul>
          {navigation.map(item => (
            <li key={item.href}><NavigationLink {...item} mobile onClick={() => close()} /></li>
          ))}
        </ul>
        <PrimaryCTA href={site.appointment.href} target="_blank" rel="noopener noreferrer" className="mt-7 w-full justify-between" onClick={() => close()}>
          Request an appointment <span aria-hidden="true">↗</span>
        </PrimaryCTA>
        <p className="mt-4 text-center text-xs text-white/50">English &amp; Spanish · Central Florida</p>
      </nav>
    </details>
  );
}
