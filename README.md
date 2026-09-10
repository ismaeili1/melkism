# MELKISM

**Media, Knowledge and Intelligence for Real Estate and the Built Environment**

MELKISM is an independent knowledge and intelligence platform focused on real estate, architecture, the built environment, urban intelligence, market knowledge, data-driven analysis, and AI-enabled knowledge systems.

## Project

- Framework: Next.js 16.3.0
- Runtime: React 19.2.8
- Database layer: Prisma 7.9.0
- Authentication: NextAuth 5 beta
- Primary locales: `fa`, `en`, `ar`, `tr`

## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Validate the project:

```bash
npx prisma validate
npx prisma generate
npx tsc --noEmit
npm run lint
npm run build
```

## Repository

The canonical development branch is `main`.

## Status

MELKISM is under active phased development. Current work is establishing the production backend foundation for content persistence, authorization, rate limiting, and editorial workflows.
