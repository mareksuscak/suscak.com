import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ENV } from 'varlock/env';
import './globals.css';

const title = 'Software Engineering — Marek Suscak';
const description =
  "Oh hi! I'm Marek. I share my experiments and spread the passion for computer systems.";

export const metadata: Metadata = {
  metadataBase: new URL(ENV.SITE_URL),
  title,
  description,
  alternates: { canonical: '/', types: { 'text/markdown': '/index.md' } },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Marek Suscak',
    title,
    description,
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@mareksuscak',
  },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
