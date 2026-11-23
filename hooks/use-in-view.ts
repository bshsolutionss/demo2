'use client';
import { useEffect, useRef } from 'react';
import { motion } from '@/config/motion';

/**
 * Enhance visible server HTML only after hydration. The reveal replays every time the element
 * re-enters the viewport: it is re-armed only once fully off-screen, so it never flickers in view.
 */
export function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element || !('IntersectionObserver' in window)) return;
    const media = window.matchMedia(motion.reducedMotionQuery);
    if (media.matches) return;

    const show = () => { delete element.dataset.pending; };
    const hide = () => { element.dataset.pending = 'true'; };
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.intersectionRatio >= motion.reveal.threshold) show();
        else if (!entry.isIntersecting) hide();
      }
    }, { threshold: [0, motion.reveal.threshold] });

    // Content already on screen at load stays visible; everything else waits to be revealed.
    if (element.getBoundingClientRect().top >= window.innerHeight) hide();
    observer.observe(element);
    element.addEventListener('focusin', show);
    const onMotionChange = () => { if (media.matches) { observer.disconnect(); show(); } };
    media.addEventListener('change', onMotionChange);
    return () => { observer.disconnect(); show(); element.removeEventListener('focusin', show); media.removeEventListener('change', onMotionChange); };
  }, []);
  return ref;
}
