# MELKISM v0.2.5 — Content Persistence Foundation

## Stage 3 — Content Persistence Contract

This stage establishes the persistence boundary for normalized
MELKISM content.

## Responsibilities

The contract supports:

- content creation
- lookup by content ID
- lookup by source
- lookup by language
- lookup by tag
- controlled updates
- deletion
- existence checks

## Data Boundary

The persistence record is based on the existing
`NormalizedContent` contract.

The following fields remain available:

- id
- sourceId
- title
- summary
- body
- url
- publishedAt
- language
- tags
- metadata

No persistence-specific database fields are introduced at this
stage.

## Architectural Boundary

This contract does not implement:

- Prisma
- PostgreSQL
- database connections
- HTTP APIs
- filesystem storage
- external services
- caching

## Dependency Direction

The intended dependency direction is:

Normalized Content
→ Content Persistence Contract
→ Persistence Implementation

The ingestion runtime remains independent of the persistence
technology.

## Design Principle

The content model must remain portable.

Future persistence implementations may use:

- in-memory repositories
- Prisma repositories
- SQL repositories
- document stores
- other persistence adapters

without changing the normalization or ingestion contracts.
