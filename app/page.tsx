import { ContactCTA } from '@/components/shared/contact-cta';
import { HeroSection, ServicesPreview, AboutPreview } from '@/features/home';
export default function Home() {
  return <main id="main" tabIndex={-1}>
    <HeroSection />
    <ServicesPreview />
    <AboutPreview />
    <ContactCTA />
  </main>;
}
