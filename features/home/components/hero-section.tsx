import { Container } from '@/components/layout/container';
import { motion } from '@/config/motion';
import { cn } from '@/lib/utils';
import { HeroContent } from './hero-content';
import { HeroOrbit } from './hero-orbit';

export function HeroSection() {
  return <section aria-labelledby="hero-title" className="overflow-hidden bg-background">
    <Container className="grid items-center gap-2 pt-8 pb-12 lg:min-h-160 lg:grid-cols-[.9fr_1.1fr] lg:gap-0 lg:py-10">
      <HeroContent />
      <div className={cn('-mr-6 sm:-mr-10 lg:-mr-20 lg:ml-6', motion.hero.media)}>
        <HeroOrbit />
      </div>
    </Container>
  </section>;
}
