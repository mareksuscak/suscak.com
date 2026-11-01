# suscak.com

Personal website of Marek Suscak, live at [www.suscak.com](https://www.suscak.com).

A single static page built with the [Next.js](https://nextjs.org) App Router and deployed on [Vercel](https://vercel.com).

## Stack

- **Next.js 16** (App Router, Turbopack, typed routes) and **React 19**
- **TypeScript 7** (native compiler)
- **Tailwind CSS 4** with design tokens in `app/globals.css` (light and dark mode via `light-dark()`)
- **oxlint** for linting, including type-aware rules and type-checking (via `oxlint-tsgolint`), and **oxfmt** for formatting
- **Knip** for unused files, exports and dependencies
- **varlock** for environment variables (`.env.schema` declares them; local values are encrypted in `.env.local`)
- **Vercel Analytics** and **Speed Insights**
- **Yarn 4** via corepack, **Node.js 26**

## Development

Corepack is no longer bundled with Node.js 25+, so install it once with `npm install -g corepack`, then:

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

| Command          | What it does                                    |
| ---------------- | ----------------------------------------------- |
| `yarn dev`       | Start the dev server                            |
| `yarn build`     | Production build                                |
| `yarn typecheck` | Generate route types and type-check with oxlint |
| `yarn lint`      | Lint with oxlint (`yarn lint:fix` to auto-fix)  |
| `yarn fmt`       | Format with oxfmt (`yarn fmt:check` to verify)  |
| `yarn knip`      | Find unused files, exports and dependencies     |

CI (`.github/workflows/ci.yml`) runs all of the above plus a production build on every push and pull request.

## Agent readiness

- `/llms.txt` summarizes the site for LLMs ([llmstxt.org](https://llmstxt.org))
- `/` returns Markdown when requested with `Accept: text/markdown` (also available at `/index.md`, from `content/home.ts`)
- The home page sends a `Link` header pointing to both, and `robots.txt` declares [Content Signals](https://contentsignals.org)

## Environment variables

Variables are declared in [`.env.schema`](./.env.schema). Local values go in `.env.local` (gitignored) and are encrypted with your device key:

```bash
yarn varlock load                         # validate and show the config (secrets masked)
yarn varlock encrypt --file .env.local    # encrypt plaintext secrets in place
yarn varlock reveal KEY                   # securely view a value
```

On Vercel, values come from the project's environment variables. Production builds also need `_VARLOCK_ENV_KEY`, which encrypts the env baked into the build.

## Coding agents

`AGENTS.md` holds the instructions for coding agents; its Next.js block is maintained by `next dev` and points agents at the docs bundled in `node_modules/next/dist/docs/`.
