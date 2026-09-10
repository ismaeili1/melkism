# MELKISM v6.3 - Production Deployment Readiness & Release Governance

## Purpose

v6.3 establishes a release-governance boundary on top of the
completed production, operations and reliability layers.

## Added components

- release governance type contract
- release governance constants
- release manifest service
- release status API
- localized release status page
- deployment-readiness documentation

## API

`/api/release-status`

The endpoint returns a release manifest and uses no-store caching.

## Frontend

`/[locale]/release-status`

Supported locales:

- fa
- en
- ar
- tr

RTL is supported for Persian and Arabic.

## Safety

v6.3 does not:

- modify Prisma
- create migrations
- modify .env files
- read or print environment secret values
- replace authentication
- replace billing
- replace Property Marketplace
- replace Business Subscription
- modify existing production reliability modules
- modify MELKIST

## Release governance

The release manifest uses three states:

- ready
- warning
- blocked

A blocked release returns HTTP 503 from the release-status API.

## Validation

The implementation is validated with:

- foundation checks
- package checks
- source verification
- TypeScript
- ESLint
- production build
- final structural audit

## Release principle

v6.3 separates the application release-governance contract from
specific deployment vendors and CI/CD systems.

Future integrations may connect this boundary to:

- GitHub Actions
- Vercel
- container deployment
- cloud deployment
- release management systems
- uptime monitoring
- incident management
