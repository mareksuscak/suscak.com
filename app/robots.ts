import type { MetadataRoute } from 'next';
import { ENV } from 'varlock/env';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: new URL('/sitemap.xml', ENV.SITE_URL).href,
  };
}
