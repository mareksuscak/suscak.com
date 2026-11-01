import type { NextConfig } from 'next';
import { varlockNextConfigPlugin } from '@varlock/nextjs-integration/plugin';

const withVarlock = varlockNextConfigPlugin();

const isDev = process.env.NODE_ENV === 'development';
// Set by Vercel at build time: 'production' | 'preview' | 'development'.
const isVercelPreview = process.env.VERCEL_ENV === 'preview';

type Csp = Record<string, string[]>;

// Non-nonce CSP for a fully static site (nonces would force dynamic rendering).
// `unsafe-eval` is only required by the dev server.
const baseCsp: Csp = {
  'default-src': ["'self'"],
  'script-src': ["'self'", "'unsafe-inline'", ...(isDev ? ["'unsafe-eval'"] : [])],
  'style-src': ["'self'", "'unsafe-inline'"],
  'img-src': ["'self'", 'blob:', 'data:'],
  'font-src': ["'self'"],
  'connect-src': ["'self'"],
  'object-src': ["'none'"],
  'base-uri': ["'self'"],
  'form-action': ["'self'"],
  'frame-ancestors': ["'none'"],
  'upgrade-insecure-requests': [],
};

// Vercel Toolbar / Comments on preview deployments:
// https://vercel.com/docs/vercel-toolbar/managing-toolbar#using-a-content-security-policy
const vercelToolbarCsp: Csp = {
  'script-src': ['https://vercel.live'],
  'connect-src': ['https://vercel.live', 'wss://ws-us3.pusher.com'],
  'img-src': ['https://vercel.live', 'https://vercel.com'],
  'frame-src': ['https://vercel.live'],
  'style-src': ['https://vercel.live'],
  'font-src': ['https://vercel.live', 'https://assets.vercel.com'],
};

function serializeCsp(...policies: Csp[]) {
  const merged: Csp = {};
  for (const policy of policies) {
    for (const [directive, sources] of Object.entries(policy)) {
      merged[directive] = [...new Set([...(merged[directive] ?? []), ...sources])];
    }
  }
  return Object.entries(merged)
    .map(([directive, sources]) => [directive, ...sources].join(' '))
    .join('; ');
}

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: serializeCsp(baseCsp, isVercelPreview ? vercelToolbarCsp : {}),
  },
  { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
];

// Agent discovery on the home page (RFC 8288 Link header).
const homeHeaders = [
  {
    key: 'Link',
    value: [
      '</llms.txt>; rel="describedby"; type="text/plain"',
      '</index.md>; rel="alternate"; type="text/markdown"',
    ].join(', '),
  },
  // `/` returns HTML or Markdown depending on the Accept header (see rewrites below).
  { key: 'Vary', value: 'Accept' },
];

const config: NextConfig = {
  reactStrictMode: true,
  typedRoutes: true,
  turbopack: {
    rules: {
      '*.css': {
        loaders: ['@tailwindcss/turbopack'],
        as: '*.css',
      },
    },
  },
  async headers() {
    return [
      { source: '/(.*)', headers: securityHeaders },
      { source: '/', headers: homeHeaders },
    ];
  },
  async rewrites() {
    return {
      // Markdown for Agents: serve the Markdown version of `/` to clients that ask for it.
      beforeFiles: [
        {
          source: '/',
          has: [{ type: 'header', key: 'accept', value: '.*text/markdown.*' }],
          destination: '/index.md',
        },
      ],
    };
  },
};

export default withVarlock(config);
