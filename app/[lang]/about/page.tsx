import type { Metadata } from 'next';
import { alternates, getDictionary } from '@/i18n/server';
import { AboutIntroduction } from '@/features/about/components/about-introduction';
import { BusinessDetails } from '@/features/about/components/business-details';
import { AccountantIntroduction } from '@/features/about/components/accountant-introduction';
import { TaxEducationSection } from '@/features/insights/components/tax-education-section';
import { WhoWeServe } from '@/features/about/components/who-we-serve';
import { OurApproach } from '@/features/about/components/our-approach';
import { ContactCTA } from '@/components/shared/contact-cta';

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getDictionary();
  return {
    title: t.about.title,
    description: t.about.description,
    alternates: alternates(locale, '/about'),
    openGraph: { title: t.about.ogTitle, description: t.about.description },
  };
}

export default function AboutPage() {
  return <main id="main" tabIndex={-1}>
    <AboutIntroduction />
    <BusinessDetails />
    <WhoWeServe />
    <AccountantIntroduction />
    <OurApproach />
    <TaxEducationSection />
    <ContactCTA />
  </main>;
}
