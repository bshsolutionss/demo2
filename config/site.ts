interface HeroMediaConfig { src?: string; poster: string; }
const heroMedia: HeroMediaConfig = { poster: '/images/tax-preparation-editorial.jpg' };
const instagram = 'https://www.instagram.com/ehtaxsolutions/';

/** Business information supplied by the owner; no office address or credentials asserted. */
export const site = {
  name: 'EH Tax & Business Solutions',
  tagline: 'Your Goals. Our Priority.',
  description: 'U.S. tax preparation for individuals, families, and small businesses, plus business formation guidance. Serving Central Florida in English and Spanish.',
  email: 'ehtaxsolutions@gmail.com',
  serviceArea: 'Central Florida, USA',
  locationReference: 'Sanford, Florida — location tag on the welcome post',
  languages: 'English & Spanish',
  clients: 'Individuals, Hispanic families, small businesses, and entrepreneurs',
  appointment: { href: instagram, label: 'Request an appointment', instruction: 'Send a direct message on Instagram to request an appointment.' },
  businessFormation: { keyword: 'EMPRESA', emailHref: 'mailto:ehtaxsolutions@gmail.com?subject=EMPRESA' },
  sources: {
    welcome: 'https://www.instagram.com/ehtaxsolutions/p/DdfX-dztHLU/',
    formation: 'https://www.instagram.com/ehtaxsolutions/reel/DdzTa5PRHml/',
  },
  social: [
    { label: 'Instagram', href: instagram, handle: '@ehtaxsolutions' },
    { label: 'Facebook', href: 'https://www.facebook.com/people/EH-Tax-Business-Solutions/61594762776415/', handle: 'EH Tax & Business Solutions' },
  ],
  heroMedia,
} as const;
