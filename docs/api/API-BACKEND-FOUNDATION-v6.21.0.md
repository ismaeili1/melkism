# MELKISM v6.21.0 — API & Backend Service Foundation

## Objective

Establish the common backend/API foundation for MELKISM.

## Architecture

HTTP Request
→ Route Handler
→ Authentication
→ Authorization
→ Validation
→ Service
→ Repository
→ Prisma

## API core

### types.ts

Provides:

- ApiSuccess
- ApiFailure
- ApiResult
- ApiRequestContext
- PaginationInput
- PaginationMeta
- PaginatedData

### errors.ts

Central API error taxonomy:

- BAD_REQUEST
- UNAUTHORIZED
- FORBIDDEN
- NOT_FOUND
- CONFLICT
- VALIDATION_ERROR
- RATE_LIMITED
- INTERNAL_ERROR

### response.ts

Provides consistent JSON responses with:

- success envelope
- error envelope
- requestId
- no-store response caching

### request.ts

Creates server-side request context and request IDs.

### validation.ts

Provides basic type-safe request validation primitives.

### handler.ts

Provides the generic server-side Route Handler execution boundary and connects API requests to the existing authorization layer.

## Health endpoint

`GET /api/v1/health`

The endpoint is dynamic and does not access the database.

## Service / Repository boundary

Service and repository contracts are introduced without coupling every future domain service to a single implementation.

## Database

Prisma remains the persistence implementation.

No database query is required for the health endpoint.

No database mutation is executed in this phase.

## Security

Client-side browser storage is not used for authorization.

The API layer does not expose database credentials.

Request IDs are propagated through the API response envelope.

Authentication and authorization remain server-side.

## Deferred domains

The following are intentionally deferred:

- Content CRUD
- Source CRUD
- Taxonomy CRUD
- Media CRUD
- Knowledge Graph CRUD
- Intelligence CRUD
- Search API
- pagination implementations
- rate limiting backend
- audit event persistence
- OpenAPI publication
- webhook infrastructure
- background jobs

These will be implemented on top of the common backend foundation.
