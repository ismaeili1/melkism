# MELKISM v6.7 - Request Protection, Rate Limiting & CSRF Foundation

## Purpose

v6.7 adds an application-level request protection boundary.

The objective is to provide a vendor-neutral foundation for:

- HTTP method protection
- Origin validation
- CSRF request boundaries
- in-memory rate limiting
- request identity normalization
- security control diagnostics

## Request protection

Allowed HTTP methods are explicitly defined.

Safe methods:

- GET
- HEAD
- OPTIONS

Mutation methods:

- POST
- PUT
- PATCH
- DELETE

Mutation requests are required to provide a content type.

## Origin validation

Origin and Referer values are validated for:

- maximum length
- URL syntax

No secret or credential values are inspected.

## Rate limiting

The current implementation uses application-local memory.

Default policy:

- read requests: 60 requests per minute
- mutation requests: 20 requests per minute

The limit is keyed by a normalized request identity.

## Important production limitation

The current rate limiter is intentionally a foundation.

In a multi-instance production deployment, in-memory buckets are
not shared between instances.

A future adapter should connect this boundary to a distributed
store such as Redis or another shared rate-limit service.

## API

`/api/request-protection`

`GET /api/request-protection?report=true`

returns the security-control status.

The same endpoint can process request-protection checks.

## Frontend

`/[locale]/request-protection`

Supported locales:

- fa
- en
- ar
- tr

Persian and Arabic use RTL.

## Security boundary

v6.7 does not:

- modify Prisma
- create migrations
- read secret values
- print secret values
- modify environment files
- replace authentication
- replace billing
- replace Property Marketplace
- replace Business Subscription
- modify observability
- modify deployment verification
- modify release governance
- modify MELKIST

## Dependency policy

No new npm dependency is required.

## Future upgrades

The request-protection boundary can later connect to:

- distributed rate limiting
- trusted-origin configuration
- CSRF tokens
- authenticated identity
- WAF
- bot protection
- security event logging
- adaptive throttling
- abuse detection
- incident response

## Completion

v6.7 passes when:

- all v6.7 source files exist
- TypeScript passes
- ESLint passes
- production build passes
- security source inspection passes
- final structural audit passes
