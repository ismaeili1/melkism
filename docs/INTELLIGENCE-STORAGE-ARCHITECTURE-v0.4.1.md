# MELKISM v0.4.1 — Intelligence Storage Architecture

## Purpose

v0.4.1 introduces the persistence boundary for extracted intelligence entities.

## Architecture

Entity Extraction
↓
Intelligence Persistence Integration
↓
Intelligence Storage Runtime
↓
Intelligence Storage Contract
↓
Memory Storage Adapter

## Responsibilities

### Storage Contract

Defines the persistence API without selecting a storage technology.

### Memory Adapter

Provides the current development implementation.

### Storage Runtime

Provides the stable runtime boundary for higher layers.

### Persistence Integration

Connects extraction results to storage without exposing adapter details.

## Current Operations

- save
- findById
- findByType
- remove
- count

## Current Provider

The development provider is an in-memory adapter.

## Future Providers

The boundary can support relational, graph, and distributed knowledge storage implementations.

## Validation

v0.4.1 E2E validation covers:

- entity persistence
- entity retrieval
- count validation
- type-based retrieval
- entity removal
- removal verification
