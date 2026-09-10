# MELKISM v6.2 - Production Reliability & Diagnostics

## Purpose

v6.2 adds a runtime reliability and diagnostics foundation on top
of the completed production release and operations layers.

## Capabilities

The reliability layer reports:

- runtime availability
- application environment
- release contract
- uptime
- heap memory usage
- secret-safety status
- schema-safety status

## API

`/api/reliability-status`

The endpoint:

- returns JSON
- uses no-store caching
- returns HTTP 200 for pass/warning reports
- returns HTTP 503 if a blocking reliability check exists

## Frontend

`/[locale]/reliability-status`

Supported locales:

- fa
- en
- ar
- tr

Persian and Arabic use RTL direction.

## Security boundary

The reliability layer:

- does not print secrets
- does not read secret values
- does not modify .env files
- does not modify Prisma
- does not create migrations
- does not modify authentication
- does not modify billing
- does not modify Property Marketplace
- does not modify Business Subscription
- does not modify MELKIST

## Runtime memory

The service reports process-level runtime memory information
using Node.js process metrics.

The values are diagnostic data and are not persisted.

## Future integrations

This boundary can later connect to:

- application monitoring
- uptime monitoring
- error tracking
- alerting
- metrics collection
- distributed tracing
- deployment health systems

## Completion criteria

v6.2 passes when:

- foundation validation passes
- source files exist
- TypeScript passes
- ESLint passes
- production build passes
- final structural audit passes
