# MELKISM v0.2.5 — Persistence Repository Interfaces

## Stage 4 — Repository Interfaces

This stage establishes the repository abstraction between the
runtime layer and persistence contracts.

## Repository Types

Three repository interfaces are defined:

### ContentRepository

Responsible for normalized content persistence.

### IngestionRepository

Responsible for persisted ingestion results.

### ProvenanceRepository

Responsible for provenance records and provenance relationships.

## Dependency Direction

The architecture is:

Runtime
→ Repository Interface
→ Persistence Contract
→ Persistence Implementation

A future implementation may be:

Runtime
→ Repository Interface
→ Prisma Repository
→ Database

The runtime must not directly import Prisma or database-specific
implementations.

## Current Scope

This stage defines interfaces only.

No:

- Prisma
- PostgreSQL
- database connection
- API
- filesystem persistence
- transaction implementation

is introduced.

## Design Principle

Repository interfaces provide the stable boundary required for
future persistence implementations.

This allows test repositories and production repositories to be
introduced independently of the ingestion runtime.
