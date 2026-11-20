'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { motion } from '@/config/motion';
import { cn } from '@/lib/utils';

interface VideoPlayerProps {
  src?: string;
  poster: string;
  posterAlt?: string;
  appearance?: 'dark' | 'light';
  children?: ReactNode;
}
export function VideoPlayer({ src, poster, posterAlt = '', appearance = 'dark', children }: VideoPlayerProps) {
  const root = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);
  const [ambientPaused, setAmbientPaused] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [failed, setFailed] = useState(false);
  const light = appearance === 'light';

  useEffect(() => {
    const container = root.current;
    if (container) container.dataset.enhanced = 'true';
    const reset = () => { if (container) delete container.dataset.enhanced; };
    const element = video.current;
    if (!element || !src) return reset;
    const media = window.matchMedia(motion.reducedMotionQuery);
    const applyPreference = () => {
      if (media.matches) element.pause();
      else element.play().catch(() => setFeedback('Autoplay unavailable. Use Play video to begin.'));
    };
    applyPreference();
    media.addEventListener('change', applyPreference);
    return () => { media.removeEventListener('change', applyPreference); element.pause(); reset(); };
  }, [src]);

  async function toggle() {
    if (!src) { setAmbientPaused(!ambientPaused); return; }
    const element = video.current;
    if (!element) return;
    if (!element.paused) { element.pause(); return; }
    try { await element.play(); setFeedback(''); }
    catch { setFeedback('Video could not play. Showing the poster instead.'); }
  }
  const paused = src ? !playing : ambientPaused;
  const action = `${paused ? 'Play' : 'Pause'} ${src ? 'video' : 'animation'}`;
  return (
    <div ref={root} data-paused={paused} className={cn('group/media absolute inset-0 overflow-hidden', light ? 'bg-background' : 'bg-primary')}>
      <div className={cn('absolute inset-0', !src && 'motion-safe:group-data-[enhanced=true]/media:animate-media-drift', ambientPaused && '[animation-play-state:paused]!')}>
        <Image src={poster} alt={posterAlt} fill loading="eager" fetchPriority="high" sizes="(max-width: 1024px) 100vw, 55vw" className={cn(light ? 'object-contain' : 'object-cover object-center')} />
      </div>
      {src && (
        <video ref={video} src={src} poster={poster} muted loop playsInline preload="metadata"
          aria-label="EH Tax & Business Solutions introduction"
          className={cn('absolute inset-0 size-full object-cover motion-safe:transition-opacity motion-safe:duration-500', (!ready || failed) && 'opacity-0')}
          onLoadedData={() => setReady(true)} onPlaying={() => { setPlaying(true); setFailed(false); }}
          onPause={() => setPlaying(false)}
          onError={() => { setPlaying(false); setFailed(true); setFeedback('Video unavailable. Showing the poster instead.'); }}
        />
      )}
      {!light && <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-black/10" />}
      {children}
      <p className={cn('absolute top-6 left-6 max-w-64 text-[0.5625rem] leading-relaxed tracking-widest uppercase sm:left-10', light ? 'text-muted' : 'text-white/90')}>
        {src ? 'EH Tax & Business Solutions' : 'Illustrative tax preparation scene'}
      </p>
      <div className="absolute right-6 bottom-6 z-20 max-w-64 text-right sm:right-10">
        <button type="button" onClick={toggle} aria-pressed={paused} disabled={failed}
          className={cn('hidden min-h-11 items-center gap-3 rounded-full border border-border bg-background px-3 py-2 text-xs text-foreground group-data-[enhanced=true]/media:inline-flex hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-60', !src && 'motion-reduce:hidden!')}>
          <span aria-hidden="true">{paused ? '▷' : 'Ⅱ'}</span>{action}
        </button>
        <p role="status" className="mt-2 text-xs leading-relaxed text-muted">{feedback}</p>
      </div>
    </div>
  );
}
