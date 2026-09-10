# MELKISM v6.5 - Observability & Operational Monitoring Foundation

## Purpose

v6.5 establishes a vendor-neutral application observability
foundation on top of the existing production release,
operations, reliability, release-governance and deployment
verification layers.

## Added capabilities

- Runtime metrics
- Operational events
- Observability report
- Observability API
- Runtime metrics API
- Operational events API
- Localized observability status UI

## APIs

`/api/observability-status`

Provides the complete observability report.

`/api/runtime-metrics`

Provides runtime metrics.

`/api/operational-events`

Provides operational events.

All endpoints use no-store caching.

## Runtime metrics

The current foundation reports:

- process uptime
- RSS memory
- heap total
- heap used
- external memory
- array buffers

Metrics are calculated at request time.

They are not persisted.

## Events

Events are structured as:

- id
- timestamp
- level
- name
- message
- source

The current foundation provides diagnostic runtime events.

## Frontend

`/[locale]/observability-status`

Supported locales:

- fa
- en
- ar
- tr

Persian and Arabic use RTL.

## Security

v6.5 does not:

- read secret values
- print secret values
- modify .env files
- modify Prisma
- create migrations
- modify authentication
- modify billing
- modify Property Marketplace
- modify Business Subscription
- modify release governance
- modify deployment verification
- modify MELKIST

## Vendor neutrality

The foundation does not require:

- OpenTelemetry
- Sentry
- Datadog
- New Relic
- Prometheus
- Grafana

These may be connected later through the observability boundary.

## Completion criteria

v6.5 passes when:

- source files exist
- TypeScript passes
- ESLint passes
- production build passes
- final structural audit passes
