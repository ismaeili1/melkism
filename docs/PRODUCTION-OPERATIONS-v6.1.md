# MELKISM v6.1 - Production Operations & Security Hardening

## Purpose

v6.1 provides a production operations and security baseline
on top of the completed v6.0 release.

## Scope

The release adds:

- operational readiness contract
- operational readiness service
- readiness API
- localized operational status page
- secret-safety declaration
- schema-safety declaration
- final TypeScript validation
- final ESLint validation
- final production build validation

## API

`/api/production-readiness`

The endpoint uses:

- no-store cache policy
- HTTP 200 for healthy/warning readiness
- HTTP 503 if a blocking operational condition exists

## Frontend

`/[locale]/operations-status`

Supported locales:

- fa
- en
- ar
- tr

RTL is supported for Persian and Arabic.

## Security boundary

v6.1 does not:

- read secret values
- print secret values
- modify environment files
- modify Prisma schema
- create database migrations
- alter payment configuration
- alter authentication configuration
- overwrite Property Marketplace
- overwrite Business Subscription
- modify MELKIST

## Operational principle

v6.1 introduces observability and readiness at the application
boundary without coupling the platform to a specific monitoring
vendor.

This leaves future integrations open for:

- uptime monitoring
- error tracking
- logs
- metrics
- distributed tracing
- alerting
- deployment health checks

## Completion

The phase passes when:

- all v6.1 files exist
- TypeScript passes
- ESLint passes
- production build passes
- final structural audit passes
