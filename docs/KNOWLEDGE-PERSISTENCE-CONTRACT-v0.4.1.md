# MELKISM v0.4.1 — Knowledge Persistence Contract

## Persistence Boundary

ContentEntity
↓
IntelligenceStorage
↓
IntelligenceStorageRuntime
↓
IntelligenceMemoryStorageAdapter

## Contract Operations

- save
- findById
- findByType
- remove
- count

## Architectural Rule

Higher-level intelligence services depend on contracts and runtime boundaries rather than concrete storage implementations.

## Status

MELKISM v0.4.1 persistence foundation completed and E2E validated.
