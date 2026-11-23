'use client';

import { useEffect, useRef } from 'react';
import { motion } from '@/config/motion';

const INTERACTIVE = 'a, button, summary, label, [role="button"], [data-cursor]';
const TEXT_ENTRY = 'input, textarea, select, [contenteditable="true"]';
/** Fraction of the pointer's offset from centre that a magnetic element follows, capped in px. */
const MAGNET = { strength: 0.2, max: 8 };
/** Ring follow factor per frame (60fps): higher = tighter. */
const FOLLOW = 0.22;

/**
 * Desktop-only cursor accent and magnetic pull on `[data-magnetic]`.
 * The native cursor is kept; this only adds a thin gold ring that trails it and opens over controls.
 * The animation loop sleeps once the ring catches up, so an idle page does no per-frame work.
 * Inline styles touch only the CSS `translate` property, which composes with Tailwind `scale`/`transform`.
 */
export function PointerEffects() {
  const rootRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!fine.matches || window.matchMedia(motion.reducedMotionQuery).matches) return;
    const root = rootRef.current;
    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!root || !ring || !dot) return;

    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let frame = 0;
    let magnet: HTMLElement | null = null;

    const tick = () => {
      current.x += (target.x - current.x) * FOLLOW;
      current.y += (target.y - current.y) * FOLLOW;
      ring.style.translate = `${current.x}px ${current.y}px`;
      frame = Math.abs(target.x - current.x) + Math.abs(target.y - current.y) > 0.1 ? requestAnimationFrame(tick) : 0;
    };
    const wake = () => { if (!frame) frame = requestAnimationFrame(tick); };

    const release = () => {
      if (magnet) magnet.style.translate = '';
      magnet = null;
    };

    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return;
      if (root.dataset.visible !== 'true') {
        // First move: jump into place instead of sliding in from the corner.
        current.x = event.clientX;
        current.y = event.clientY;
        root.dataset.visible = 'true';
      }
      target.x = event.clientX;
      target.y = event.clientY;
      dot.style.translate = `${event.clientX}px ${event.clientY}px`;
      wake();

      const element = event.target instanceof Element ? event.target : null;
      root.dataset.state = element?.closest(TEXT_ENTRY) ? 'text' : element?.closest(INTERACTIVE) ? 'hover' : 'idle';

      const next = element?.closest<HTMLElement>('[data-magnetic]') ?? null;
      if (next !== magnet) release();
      magnet = next;
      if (magnet) {
        const box = magnet.getBoundingClientRect();
        const clamp = (value: number) => Math.max(-MAGNET.max, Math.min(MAGNET.max, value * MAGNET.strength));
        magnet.style.translate = `${clamp(event.clientX - (box.left + box.width / 2))}px ${clamp(event.clientY - (box.top + box.height / 2))}px`;
      }
    };
    const onLeave = () => { root.dataset.visible = 'false'; release(); };
    const onDown = () => { root.dataset.pressed = 'true'; };
    const onUp = () => { root.dataset.pressed = 'false'; };

    window.addEventListener('pointermove', onMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', onLeave);
    window.addEventListener('blur', onLeave);
    window.addEventListener('pointerdown', onDown, { passive: true });
    window.addEventListener('pointerup', onUp, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      release();
      window.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('pointerleave', onLeave);
      window.removeEventListener('blur', onLeave);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      data-visible="false"
      data-state="idle"
      // Desktop layout only: below `lg` the mobile menu is in use, even with a mouse (narrow windows, devtools).
      className="group/cursor pointer-events-none fixed inset-0 z-[70] opacity-0 max-lg:hidden transition-opacity duration-300 data-[visible=true]:opacity-100 data-[state=text]:opacity-0"
    >
      <div ref={ringRef} className="absolute top-0 left-0 -mt-4 -ml-4 will-change-[translate]">
        <div className="size-8 rounded-full border border-accent/70 transition-[scale,background-color,border-color] duration-500 ease-emphasized group-data-[state=hover]/cursor:scale-150 group-data-[state=hover]/cursor:border-accent group-data-[state=hover]/cursor:bg-accent/10 group-data-[pressed=true]/cursor:scale-90" />
      </div>
      <div ref={dotRef} className="absolute top-0 left-0 -mt-0.5 -ml-0.5">
        <div className="size-1 rounded-full bg-accent transition-[scale] duration-300 ease-emphasized group-data-[state=hover]/cursor:scale-0" />
      </div>
    </div>
  );
}
