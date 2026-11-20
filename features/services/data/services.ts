import { site } from '@/config/site';

export interface BusinessService {
  slug: string;
  category: string;
  title: string;
  description: string;
  conversation: string;
  source: { label: string; href: string };
  inquiryKeyword?: string;
}

/** Latest owner-supplied service list. */
export const services: readonly BusinessService[] = [
  {
    slug: 'individual-family-tax-preparation',
    category: 'Individuals & families',
    title: 'Individual & Family Tax Preparation',
    description: 'U.S. tax preparation for individuals and families, with support in English and Spanish and a focus on helping Hispanic households navigate tax filing.',
    conversation: 'Tell us about your individual or family tax preparation inquiry. Request an appointment by sending a direct message on Instagram.',
    source: { label: 'Tax preparation announcement', href: site.sources.welcome },
  },
  {
    slug: 'small-business-tax-preparation',
    category: 'Small business owners',
    title: 'Small Business Tax Preparation',
    description: 'Tax preparation for small business owners. Connect with EH to discuss your business and your tax preparation needs.',
    conversation: 'Share a brief outline of your small business tax inquiry so EH can discuss the scope and next steps with you.',
    source: { label: 'Tax preparation announcement', href: site.sources.welcome },
  },
  {
    slug: 'business-formation-guidance',
    category: 'Entrepreneurs',
    title: 'Business Formation Guidance',
    description: 'Guidance for entrepreneurs with the first steps of starting a company. EH specifically mentions LLC formation in its business formation announcement.',
    conversation: 'Have an idea for your next business? Send EMPRESA by Instagram direct message or email to ask about business formation guidance.',
    source: { label: 'Business formation announcement', href: site.sources.formation },
    inquiryKeyword: site.businessFormation.keyword,
  },
];
