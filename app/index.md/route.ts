import { homeMarkdown } from '@/content/home';

export const dynamic = 'force-static';

// Markdown version of `/`. next.config.ts rewrites `/` here when the request prefers text/markdown.
export function GET() {
  return new Response(homeMarkdown, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      // Rough token estimate (~4 characters per token), as suggested for Markdown for Agents.
      'x-markdown-tokens': String(Math.ceil(homeMarkdown.length / 4)),
      Vary: 'Accept',
    },
  });
}
