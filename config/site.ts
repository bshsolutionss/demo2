const instagram = 'https://www.instagram.com/ehtaxsolutions/';

/**
 * Language-neutral business information supplied by the owner; no office address or credentials asserted.
 * Translatable copy lives in `i18n/dictionaries`.
 */
export const site = {
  name: 'EH Tax & Business Solutions',
  email: 'ehtaxsolutions@gmail.com',
  appointmentHref: instagram,
  businessFormation: { keyword: 'EMPRESA', emailHref: 'mailto:ehtaxsolutions@gmail.com?subject=EMPRESA' },
  sources: {
    welcome: 'https://www.instagram.com/ehtaxsolutions/p/DdfX-dztHLU/',
    formation: 'https://www.instagram.com/ehtaxsolutions/reel/DdzTa5PRHml/',
  },
  social: [
    { label: 'Instagram', href: instagram, handle: '@ehtaxsolutions' },
    { label: 'Facebook', href: 'https://www.facebook.com/people/EH-Tax-Business-Solutions/61594762776415/', handle: 'EH Tax & Business Solutions' },
  ],
} as const;
