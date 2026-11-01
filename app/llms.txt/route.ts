import { ENV } from 'varlock/env';
import { profiles } from '@/content/home';

export const dynamic = 'force-static';

// https://llmstxt.org
export function GET() {
  const url = (path: string) => new URL(path, ENV.SITE_URL).href;

  const body = `# Marek Suscak

> Personal website of Marek Suscak, a software engineer focused on front-end development, user experience and engineering processes, who also speaks and mentors in the local tech community.

## Pages

- [About Marek](${url('/index.md')}): Who Marek is, his background, strengths and where to follow him

## Profiles

- [GitHub](${profiles.github})
- [LinkedIn](${profiles.linkedin})
- [X (Twitter)](${profiles.x})
`;

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
