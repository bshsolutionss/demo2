import { site } from '@/config/site';

/** Latest owner-supplied service list. Copy for each `key` lives in the dictionary `services.items`. */
export const services = [
  { key: 'individual', slug: 'individual-family-tax-preparation', sourceHref: site.sources.welcome },
  { key: 'smallBusiness', slug: 'small-business-tax-preparation', sourceHref: site.sources.welcome },
  { key: 'formation', slug: 'business-formation-guidance', sourceHref: site.sources.formation, inquiryKeyword: site.businessFormation.keyword },
] as const;

export type BusinessService = (typeof services)[number];
