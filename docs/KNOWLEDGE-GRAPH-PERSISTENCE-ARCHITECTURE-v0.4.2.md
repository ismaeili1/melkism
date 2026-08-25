# MELKISM v0.4.2 — Knowledge Graph Persistence Architecture

## Purpose

v0.4.2 establishes the persistence architecture for the MELKISM Knowledge Graph.

The design separates graph contracts, runtime orchestration, concrete persistence adapters, composition, and entity integration.

## Architecture

Entity
↓
Knowledge Node
↓
Knowledge Graph Persistence Runtime
↓
Knowledge Graph Persistence Contract
↓
Memory Graph Persistence Adapter

Relationships are persisted through the same runtime boundary.

## Components

### Knowledge Graph Contract

Defines:

- nodes
- relationships
- graph structure

### Persistence Contract

Defines technology-independent graph persistence operations.

### Memory Adapter

Provides the current development implementation.

### Persistence Runtime

Provides the stable runtime API used by higher layers.

### Composition

Creates the default persistence dependency graph.

### Entity Integration

Connects ContentEntity persistence with graph node and relationship persistence.

## Current Operations

Nodes:

- saveNode
- findNodeById
- removeNode

Relationships:

- saveRelationship
- findRelationshipsFrom
- findRelationshipsTo
- removeRelationship

Lifecycle:

- clear

## Relationship Integrity

Removing a node also removes relationships connected to that node in the memory implementation.

## Technology Boundary

The current implementation does not depend on:

- database technology
- ORM
- Graph Database
- external service

The architecture remains open for future persistent graph providers.

## Validation

v0.4.2 has been validated through an end-to-end smoke test covering:

- entity persistence
- node creation
- relationship creation
- outgoing relationship lookup
- incoming relationship lookup
- entity removal
- relationship cascade removal
- preservation of unrelated entities
