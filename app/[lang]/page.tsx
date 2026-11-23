import { ContactCTA } from '@/components/shared/contact-cta';
import { FaqSection } from '@/components/shared/faq-section';
import { HeroSection, MarqueeBand, ServicesPreview, WhyEh, ProcessSteps, AboutPreview } from '@/features/home';

export default function Home() {
  return <main id="main" tabIndex={-1}>
    <HeroSection />
    <MarqueeBand />
    <ServicesPreview />
    <WhyEh />
    <ProcessSteps />
    <AboutPreview />
    <FaqSection page="home" />
    <ContactCTA />
  </main>;
}
