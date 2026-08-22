# MELKISM v0.2.5 — Ingestion Persistence Foundation

## Stage 1 — Ingestion Persistence Contract

This stage establishes the persistence boundary for the MELKISM
content ingestion system.

## Scope

The contract defines:

- persisted ingestion identity
- source association
- normalized content
- provenance association
- persistence timestamp
- metadata
- create
- read
- source lookup
- content lookup
- update
- delete
- existence check

## Architectural Boundary

This contract does not implement:

- Prisma
- PostgreSQL
- database connections
- HTTP APIs
- filesystem persistence
- external services
- caching
- transactions

The ingestion runtime remains independent from the persistence
implementation.

## Current Architecture

Source
→ Adapter Runtime
→ Normalization Runtime
→ Provenance Runtime
→ Ingestion Pipeline Runtime
→ Ingestion Persistence Contract

## Design Principle

Persistence implementations must depend on this contract.

The ingestion runtime must not depend directly on a database
implementation.

This preserves the ability to introduce:

- in-memory persistence
- test repositories
- database repositories
- Prisma adapters
- future distributed persistence

without rewriting the ingestion pipeline.
