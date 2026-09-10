# MELKISM v6.21.1 — API Validation, Error Handling & Rate Limiting

## Objective

Harden the v6.21.0 API foundation before introducing domain CRUD endpoints.

## Components

### Rate limiting

`lib/api/core/rate-limit.ts`

Provides:

- fixed-window rate limiting
- per-client keys
- configurable request limits
- configurable windows
- remaining request information
- Retry-After information
- cleanup support

The current implementation is intentionally in-process.

For multi-instance production deployment, the rate-limit state must later move to a distributed store.

## JSON request validation

`lib/api/core/json.ts`

Provides:

- Content-Type enforcement
- JSON parsing
- request body size protection

Default body limit:

1 MiB

## HTTP method policy

`lib/api/core/methods.ts`

Provides explicit allowed HTTP method enforcement.

## Rate-limited handler

`lib/api/core/rate-limit-handler.ts`

Provides a server-side request wrapper with:

- request ID propagation
- rate limiting
- controlled success responses
- controlled error responses
- RateLimit headers

## Security response headers

Rate-limited responses include:

- X-RateLimit-Limit
- X-RateLimit-Remaining
- Retry-After

## Security invariants

The API layer must not rely on:

- localStorage
- sessionStorage
- document.cookie

Authorization remains server-side.

## Health API

`GET /api/v1/health`

The endpoint remains database-independent.

The health endpoint has its own lightweight rate limit.

## Database safety

No database migration is executed.

No database mutation is executed.

No `prisma db push` is executed.

No `prisma migrate` is executed.

## Deferred

- distributed rate limiting
- Redis integration
- WAF integration
- API gateway throttling
- request schema libraries for domain DTOs
- OpenAPI generation
- domain CRUD endpoints
- audit-event persistence
