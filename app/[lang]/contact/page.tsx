import type { Metadata } from 'next';
import { alternates, getDictionary } from '@/i18n/server';
import { ContactIntroduction } from '@/features/contact/components/contact-introduction';
import { ContactOptions } from '@/features/contact/components/contact-options';
import { MessageGuide } from '@/features/contact/components/message-guide';
import { FaqSection } from '@/components/shared/faq-section';

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getDictionary();
  return {
    title: t.contact.title,
    description: t.contact.description,
    alternates: alternates(locale, '/contact'),
    openGraph: { title: t.contact.ogTitle, description: t.contact.description },
  };
}

export default function ContactPage() {
  return <main id="main" tabIndex={-1}>
    <ContactIntroduction />
    <ContactOptions />
    <MessageGuide />
    <FaqSection page="contact" className="bg-white" />
  </main>;
}
