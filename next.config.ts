import type { NextConfig } from 'next';
import { varlockNextConfigPlugin } from '@varlock/nextjs-integration/plugin';

const withVarlock = varlockNextConfigPlugin();

const isDev = process.env.NODE_ENV === 'development';

// No nonces needed: the site is fully static. `unsafe-eval` is only required by the dev server.
const contentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''};
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data:;
  font-src 'self';
  connect-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`;

const securityHeaders = [
  { key: 'Content-Security-Policy', value: contentSecurityPolicy.replace(/\s{2,}/g, ' ').trim() },
  { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
];

const config: NextConfig = {
  reactStrictMode: true,
  typedRoutes: true,
  async headers() {
    return [{ source: '/(.*)', headers: securityHeaders }];
  },
};

export default withVarlock(config);
