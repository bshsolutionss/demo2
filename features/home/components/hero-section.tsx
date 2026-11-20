import { Container } from '@/components/layout/container';
import { HeroVideo } from './hero-video';
import { HeroContent } from './hero-content';
export function HeroSection() {
  return <section aria-labelledby="hero-title" className="overflow-hidden bg-background">
    <Container className="grid items-center gap-4 pt-8 pb-10 lg:min-h-160 lg:grid-cols-[.95fr_1.05fr] lg:gap-0 lg:py-8">
      <HeroContent />
      <HeroVideo />
    </Container>
  </section>;
}
