# MELKISM v0.2.6 — Database Repository Mapping

## Stage 3

This stage defines how a future database adapter exposes the
three persistence repositories established in v0.2.5.

## Repository Mapping

```text
Database Adapter
       |
       +-- ContentRepository
       |
       +-- IngestionRepository
       |
       +-- ProvenanceRepository

Contract

DatabaseRepositoryMapping groups the three repository interfaces.

DatabaseRepositoryFactory defines the creation boundary.

Architectural Rule

The database adapter may provide concrete repository implementations,
but the application continues to depend on:

ContentRepository
IngestionRepository
ProvenanceRepository

The database technology itself remains hidden behind the adapter.

Current Scope

No:

Prisma
PostgreSQL
MySQL
MongoDB
SQLite
database driver
migration
schema

is introduced by this stage.

Future Direction

A concrete adapter may later implement:

DatabasePersistenceAdapter
        |
        +-- DatabaseRepositoryFactory
                |
                +-- ContentRepository
                +-- IngestionRepository
                +-- ProvenanceRepository

without modifying the ingestion runtime contracts.