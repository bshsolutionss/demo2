import type { Metadata } from 'next';
import { alternates, getDictionary } from '@/i18n/server';
import { ServicesIntroduction } from '@/features/services/components/services-introduction';
import { ServicesList } from '@/features/services/components/services-list';
import { ServicesImage } from '@/features/services/components/services-image';
import { PrepareChecklist } from '@/features/services/components/prepare-checklist';
import { FaqSection } from '@/components/shared/faq-section';
import { ContactCTA } from '@/components/shared/contact-cta';

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getDictionary();
  return {
    title: t.services.title,
    description: t.services.description,
    alternates: alternates(locale, '/services'),
    openGraph: { title: t.services.ogTitle, description: t.services.description },
  };
}

export default function ServicesPage() {
  return <main id="main" tabIndex={-1}>
    <ServicesIntroduction />
    <ServicesImage />
    <ServicesList />
    <PrepareChecklist />
    <FaqSection page="services" />
    <ContactCTA />
  </main>;
}
