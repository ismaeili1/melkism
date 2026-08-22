# MELKISM v0.2.5 — Persistence Runtime Dependency Integration

## Stage 6

This stage establishes the dependency boundary between the
MELKISM runtime and persistence repositories.

## Runtime Dependency Model

The runtime receives:

- ContentRepository
- IngestionRepository
- ProvenanceRepository

through a single `PersistenceRuntimeDependencies` object.

## Dependency Direction

The intended architecture is:

Content Runtime
→ PersistenceRuntimeDependencies
→ Repository Interfaces
→ Persistence Implementation

A concrete implementation may later be:

Runtime
→ Persistence Dependencies
→ In-Memory Repository

or:

Runtime
→ Persistence Dependencies
→ Prisma Repository
→ Database

## Important Boundary

The runtime must not import:

- Prisma
- PostgreSQL clients
- database connection modules
- filesystem persistence
- HTTP persistence services

The runtime only knows the repository contracts.

## Factory

`PersistenceDependencyFactory` provides a future
composition-root boundary.

This allows the application to select the persistence
implementation without modifying the ingestion pipeline.

## Current Implementation

The current implementation remains technology-neutral.

No database integration is introduced in this stage.
