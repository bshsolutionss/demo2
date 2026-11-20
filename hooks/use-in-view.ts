'use client';
import { useEffect, useRef } from 'react';
import { motion } from '@/config/motion';

/** Enhance visible server HTML only after hydration; reveal once, including keyboard focus. */
export function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element || !('IntersectionObserver' in window)) return;
    const media = window.matchMedia(motion.reducedMotionQuery);
    if (media.matches || element.getBoundingClientRect().top < window.innerHeight) return;
    const show = () => { delete element.dataset.pending; observer.disconnect(); };
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) show();
    }, { threshold: motion.reveal.threshold });
    element.dataset.pending = 'true';
    observer.observe(element);
    element.addEventListener('focusin', show);
    const onMotionChange = () => { if (media.matches) show(); };
    media.addEventListener('change', onMotionChange);
    return () => { observer.disconnect(); delete element.dataset.pending; element.removeEventListener('focusin', show); media.removeEventListener('change', onMotionChange); };
  }, []);
  return ref;
}
