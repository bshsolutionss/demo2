import type { Metadata } from 'next';
import { ContactIntroduction } from '@/features/contact/components/contact-introduction';
import { ContactOptions } from '@/features/contact/components/contact-options';
export const metadata: Metadata = {
  title: 'Contact | EH Tax & Business Solutions',
  description: 'Request an appointment by Instagram DM. For business formation inquiries, send EMPRESA by DM or email ehtaxsolutions@gmail.com. Serving Central Florida.',
  openGraph: { title: 'Contact EH Tax & Business Solutions', description: 'Instagram appointment requests and business formation inquiries. English and Spanish.' },
};
export default function ContactPage() {
  return <main id="main" tabIndex={-1}>
    <ContactIntroduction />
    <ContactOptions />
  </main>;
}
