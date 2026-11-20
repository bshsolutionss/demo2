import type { MetadataRoute } from 'next';

/** Do not index unverified staging content. Update alongside the confirmed launch URL. */
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: '*', disallow: '/' } };
}
