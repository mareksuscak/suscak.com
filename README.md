# suscak.com

Personal website of Marek Suscak, live at [www.suscak.com](https://www.suscak.com).

A single static page built with the [Next.js](https://nextjs.org) App Router and deployed on [Vercel](https://vercel.com).

## Stack

- **Next.js 16** (App Router, Turbopack, typed routes) and **React 19**
- **TypeScript 7** (native compiler)
- **oxlint** for linting and **oxfmt** for formatting
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

| Command          | What it does                                   |
| ---------------- | ---------------------------------------------- |
| `yarn dev`       | Start the dev server                           |
| `yarn build`     | Production build                               |
| `yarn typecheck` | Generate route types and run `tsc --noEmit`    |
| `yarn lint`      | Lint with oxlint (`yarn lint:fix` to auto-fix) |
| `yarn fmt`       | Format with oxfmt (`yarn fmt:check` to verify) |

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
