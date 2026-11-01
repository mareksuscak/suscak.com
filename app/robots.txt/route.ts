import { ENV } from 'varlock/env';

export const dynamic = 'force-static';

// A route handler instead of robots.ts, because Next's MetadataRoute.Robots has no field for
// Content-Signal (https://contentsignals.org), which declares how content may be used by AI.
export function GET() {
  const body = `User-Agent: *
Content-Signal: search=yes, ai-input=yes, ai-train=no
Allow: /

Sitemap: ${new URL('/sitemap.xml', ENV.SITE_URL).href}
`;

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
