import type { Metadata } from 'next';
import { ServicesIntroduction } from '@/features/services/components/services-introduction';
import { ServicesList } from '@/features/services/components/services-list';
import { ServicesImage } from '@/features/services/components/services-image';
import { ContactCTA } from '@/components/shared/contact-cta';
export const metadata: Metadata = {
  title: 'Services | EH Tax & Business Solutions',
  description: 'Individual and family tax preparation, small business tax preparation, and business formation guidance for Central Florida. English and Spanish.',
  openGraph: { title: 'Services | EH Tax & Business Solutions', description: 'U.S. tax preparation and business formation guidance. Serving Central Florida in English and Spanish.' },
};
export default function ServicesPage() {
  return <main id="main" tabIndex={-1}>
    <ServicesIntroduction />
    <ServicesImage />
    <ServicesList />
    <ContactCTA />
  </main>;
}
