import { VideoPlayer } from '@/components/shared/video-player';
import { site } from '@/config/site';
import { motion } from '@/config/motion';
import { cn } from '@/lib/utils';
import { HeroMediaDetails } from './hero-media-details';
export function HeroVideo() {
  return <div className={cn('relative min-h-112 overflow-hidden sm:min-h-128 lg:ml-8 lg:-mr-20 lg:min-h-144', motion.hero.media)}>
    <VideoPlayer src={site.heroMedia.src} poster={site.heroMedia.poster} posterAlt="Illustrative tax preparation scene with a calculator, Form 1040 and a gold pen">
      <HeroMediaDetails />
    </VideoPlayer>
  </div>;
}
