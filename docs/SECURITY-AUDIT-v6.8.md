# MELKISM v6.8 - Security Audit Logging & Event Trail Foundation

## Purpose

v6.8 establishes a sanitized application-level security audit
event boundary.

The objective is to provide a stable event contract that future
security, authentication and incident-response systems can use.

## Event categories

Supported categories:

- authentication
- authorization
- request
- rate-limit
- csrf
- origin
- system
- deployment

## Event severity

Supported levels:

- info
- warning
- critical

## Event storage

The current implementation uses an in-memory bounded event buffer.

Maximum retained events:

500

This is a foundation only.

Events are not persisted across process restarts.

A future adapter can connect the contract to a durable audit store.

## Sanitization

The audit layer:

- limits action length
- limits path length
- limits request ID length
- removes control characters from text
- removes query strings from recorded paths
- never stores raw request payloads
- never stores environment secret values

## API

`/api/security-audit`

The endpoint returns only an aggregate summary.

It does not expose the event buffer or raw event payloads.

## Frontend

`/[locale]/security-audit`

Supported locales:

- fa
- en
- ar
- tr

Persian and Arabic use RTL.

## Security boundary

v6.8 does not:

- read secret values
- print secret values
- modify .env files
- modify Prisma
- create migrations
- modify authentication
- modify billing
- modify Property Marketplace
- modify Business Subscription
- modify observability
- modify deployment verification
- modify release governance
- modify MELKIST

## Dependency policy

No new npm dependency is required.

## Future integration

The audit contract can later receive events from:

- authentication
- authorization
- rate limiting
- CSRF validation
- WAF
- bot protection
- account security
- deployment systems
- incident response

It can then be connected to:

- PostgreSQL
- Elasticsearch
- OpenSearch
- SIEM
- centralized logging
- alerting systems

## Production limitation

The in-memory event buffer is not a durable audit store and is not
appropriate as the final persistence mechanism for compliance or
forensic requirements.

A durable storage adapter is required for those use cases.

## Completion

v6.8 passes when:

- source files exist
- TypeScript passes
- ESLint passes
- production build passes
- source safety inspection passes
- final structural audit passes
