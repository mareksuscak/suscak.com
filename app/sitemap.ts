import type { MetadataRoute } from 'next';
import { ENV } from 'varlock/env';

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: new URL('/', ENV.SITE_URL).href, changeFrequency: 'yearly', priority: 1 }];
}
