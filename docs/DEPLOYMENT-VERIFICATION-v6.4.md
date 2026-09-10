# MELKISM v6.4 - Deployment Verification & CI Foundation

## Purpose

v6.4 establishes a deployment verification boundary above the
production release, operations, reliability and release-governance
layers.

## Added components

- deployment verification types
- deployment verification constants
- deployment readiness service
- deployment readiness API
- localized deployment status page
- standalone PowerShell deployment verification script
- deployment verification documentation

## API

`/api/deployment-readiness`

The endpoint:

- returns JSON
- uses no-store caching
- reports application and release readiness
- never exposes environment secret values
- does not execute database migrations

## Frontend

`/[locale]/deployment-status`

Supported locales:

- fa
- en
- ar
- tr

Persian and Arabic use RTL.

## PowerShell verification

The repository contains:

`scripts/melkism-deployment-verification.ps1`

The script validates:

- package metadata
- Node.js availability
- npm availability
- TypeScript
- ESLint
- production build
- release infrastructure
- protected Prisma boundary
- source-level output safety

## CI strategy

v6.4 does not overwrite an existing GitHub Actions workflow.

This keeps any existing CI/CD configuration under its current
ownership boundary.

The deployment verification script can later be invoked from:

- GitHub Actions
- Vercel
- container pipelines
- cloud deployment systems
- local release procedures

## Security

v6.4 does not:

- read secret values
- print secret values
- modify .env files
- modify Prisma schema
- execute migrations
- modify authentication
- modify billing
- modify Property Marketplace
- modify Business Subscription
- modify previous production layers
- modify MELKIST

## Completion criteria

v6.4 passes when:

- foundation validation passes
- source creation succeeds
- release infrastructure exists
- TypeScript passes
- ESLint passes
- production build passes
- final structural verification passes
