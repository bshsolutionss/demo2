import type { Metadata } from 'next';
import { AboutIntroduction } from '@/features/about/components/about-introduction';
import { BusinessDetails } from '@/features/about/components/business-details';
import { AccountantIntroduction } from '@/features/about/components/accountant-introduction';
import { TaxEducationSection } from '@/features/insights/components/tax-education-section';
import { ContactCTA } from '@/components/shared/contact-cta';
export const metadata: Metadata = {
  title: 'About | EH Tax & Business Solutions',
  description: 'Meet EH Tax & Business Solutions, serving individuals, Hispanic families, small businesses, and entrepreneurs across Central Florida in English and Spanish.',
  openGraph: { title: 'About EH Tax & Business Solutions', description: 'Tax preparation and business formation guidance for Central Florida. English and Spanish.' },
};
export default function AboutPage() {
  return <main id="main" tabIndex={-1}>
    <AboutIntroduction />
    <BusinessDetails />
    <AccountantIntroduction />
    <TaxEducationSection />
    <ContactCTA />
  </main>;
}
