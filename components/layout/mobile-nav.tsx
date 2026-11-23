'use client';

import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { PrimaryCTA } from '@/components/shared/primary-cta';
import { cn } from '@/lib/utils';
import { NavigationLink } from './navigation-link';

interface MobileNavProps {
  items: { label: string; href: string }[];
  cta: { href: string; label: string; newTab: string };
  labels: { menu: string; close: string; toggle: string; nav: string; note: string };
}

/** Matches the header height below `lg` (h-16), where this menu is used. */
const PANEL_TOP = 'top-16';

/**
 * Freezes page scroll without losing the position. `overflow: hidden` alone is ignored by iOS Safari,
 * so the body is pinned with `position: fixed` and restored on unlock. Scrollbar width is compensated
 * so desktop-width windows (narrow browsers) don't shift sideways.
 */
function lockScroll() {
  const { body, documentElement: root } = document;
  const scrollY = window.scrollY;
  const gutter = window.innerWidth - root.clientWidth;
  body.style.position = 'fixed';
  body.style.top = `-${scrollY}px`;
  body.style.insetInline = '0';
  if (gutter > 0) body.style.paddingRight = `${gutter}px`;
  return () => {
    body.style.position = '';
    body.style.top = '';
    body.style.insetInline = '';
    body.style.paddingRight = '';
    window.scrollTo({ top: scrollY, behavior: 'instant' });
  };
}

export function MobileNav({ items, cta, labels }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

  const close = useCallback((restoreFocus = false) => {
    setOpen(false);
    if (restoreFocus) toggleRef.current?.focus();
  }, []);

  // Close after any navigation, including browser back/forward (state adjusted during render, not in an effect).
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const unlock = lockScroll();
    document.documentElement.dataset.menu = 'open';

    // Move focus into the menu once it is visible (on the first frame `visibility` is still mid-transition).
    const focusId = window.setTimeout(() => panelRef.current?.querySelector<HTMLElement>('a')?.focus({ preventScroll: true }), 80);

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { event.preventDefault(); close(true); return; }
      if (event.key !== 'Tab' || !panelRef.current || !toggleRef.current) return;
      // Keep focus cycling between the toggle and the menu while it is open.
      const focusables = [toggleRef.current, ...panelRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')];
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    };
    // Rotating to a desktop-width layout hides this menu; never leave the page locked behind it.
    const desktop = window.matchMedia('(min-width: 64rem)');
    const onDesktop = () => { if (desktop.matches) close(); };

    document.addEventListener('keydown', onKey);
    desktop.addEventListener('change', onDesktop);
    return () => {
      window.clearTimeout(focusId);
      document.removeEventListener('keydown', onKey);
      desktop.removeEventListener('change', onDesktop);
      delete document.documentElement.dataset.menu;
      unlock();
    };
  }, [open, close]);

  return (
    <>
      <button
        ref={toggleRef}
        type="button"
        data-menu-toggle
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? labels.close : labels.menu}
        onClick={() => setOpen(value => !value)}
        className={cn(
          'relative z-10 flex size-10 shrink-0 items-center justify-center gap-2 rounded-full border text-xs text-white motion-safe:transition-colors sm:w-auto sm:px-3',
          open ? 'border-accent' : 'border-white/20 hover:border-accent',
        )}
      >
        {/* Fixed-width label slot so "Menu" ⇄ "Close" never nudges the header. */}
        <span aria-hidden="true" className="hidden min-w-12 text-left sm:inline">{open ? labels.close : labels.menu}</span>
        <span aria-hidden="true" className="relative block h-3 w-4">
          <span className={cn('absolute inset-x-0 top-0 h-px bg-current motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-emphasized', open && 'translate-y-1.5 rotate-45')} />
          <span className={cn('absolute inset-x-0 top-1.5 h-px bg-current motion-safe:transition-opacity motion-safe:duration-200', open && 'opacity-0')} />
          <span className={cn('absolute inset-x-0 top-3 h-px bg-current motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-emphasized', open && '-translate-y-1.5 -rotate-45')} />
        </span>
      </button>

      {/* Backdrop: tap anywhere outside the panel to close. */}
      <div
        aria-hidden="true"
        onClick={() => close()}
        className={cn(
          'fixed inset-x-0 bottom-0 bg-black/50 motion-safe:transition-opacity motion-safe:duration-300',
          PANEL_TOP,
          open ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
      />

      <div
        ref={panelRef}
        id={panelId}
        inert={!open}
        className={cn(
          'fixed inset-x-0 max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain border-b border-white/10 bg-primary shadow-2xl',
          'motion-safe:transition-[clip-path,visibility] motion-safe:duration-500 motion-safe:ease-emphasized',
          PANEL_TOP,
          open ? 'visible [clip-path:inset(0_0_0_0)]' : 'invisible [clip-path:inset(0_0_100%_0)]',
        )}
      >
        <nav aria-label={labels.nav} className="px-6 pt-2 pb-[max(2rem,env(safe-area-inset-bottom))] sm:px-10">
          <ul>
            {items.map((item, index) => (
              <li
                key={item.href}
                style={{ transitionDelay: open ? `${120 + index * 50}ms` : '0ms' }}
                className={cn('motion-safe:transition-[opacity,translate] motion-safe:duration-500 motion-safe:ease-emphasized', open ? 'translate-y-0 opacity-100' : 'motion-safe:-translate-y-2 motion-safe:opacity-0')}
              >
                <NavigationLink {...item} mobile onClick={() => close()} />
              </li>
            ))}
          </ul>
          <div
            style={{ transitionDelay: open ? `${120 + items.length * 50}ms` : '0ms' }}
            className={cn('motion-safe:transition-[opacity,translate] motion-safe:duration-500 motion-safe:ease-emphasized', open ? 'translate-y-0 opacity-100' : 'motion-safe:-translate-y-2 motion-safe:opacity-0')}
          >
            <PrimaryCTA href={cta.href} target="_blank" rel="noopener noreferrer" newTabLabel={cta.newTab} className="mt-7 w-full justify-between" onClick={() => close()}>
              {cta.label} <span aria-hidden="true">↗</span>
            </PrimaryCTA>
            <p className="mt-4 text-center text-xs text-white/50">{labels.note}</p>
          </div>
        </nav>
      </div>
    </>
  );
}
