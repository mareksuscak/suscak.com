<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project

Personal website for Marek Suscak (https://www.suscak.com): a single static Next.js App Router page, deployed on Vercel. There is no database and no API routes.

### Commands

Yarn 4 via corepack (`packageManager` in package.json); never use npm or pnpm here.

- `yarn dev`: dev server (Turbopack)
- `yarn build`: production build (also type-checks)
- `yarn typecheck`: generate Next.js route types, then `tsc --noEmit`
- `yarn lint` / `yarn lint:fix`: oxlint (config in `.oxlintrc.json`); there is no ESLint
- `yarn fmt` / `yarn fmt:check`: oxfmt (config in `.oxfmtrc.json`); there is no Prettier

Before finishing a change, run `yarn lint && yarn fmt:check && yarn typecheck && yarn build`.

### Conventions

- TypeScript 7 (native compiler). `baseUrl` no longer exists; import project files with the `@/*` alias.
- `typedRoutes` is on: `<Link href>` and `router.push` only accept existing routes. Use the global `PageProps<'/route'>` / `LayoutProps<'/route'>` helpers for page and layout props.
- Security headers (including the Content-Security-Policy) live in `headers()` in `next.config.ts`. Anything that loads a third-party script, style, image, font or connection must be allowed there.
- Styles: plain CSS (`app/globals.css`) and CSS modules next to the page; system fonts only.
- Metadata files in `app/`: `favicon.ico`, `opengraph-image.tsx`, `robots.ts`, `sitemap.ts`. Add new pages to the sitemap.

### Environment variables (varlock)

- `.env.schema` (committed) declares every variable; values never go in it. Add a variable there first.
- Never read, print or edit `.env.local`: it holds the owner's encrypted secrets. Use `yarn varlock load --agent` to inspect configuration safely (sensitive values are redacted).
- Values on Vercel are Secret (write-only) and take precedence over `.env` files.
