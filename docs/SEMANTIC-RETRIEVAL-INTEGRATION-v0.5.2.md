# MELKISM v0.5.2 — Semantic Retrieval Integration

## Integration Boundary

`SemanticRetrievalQueryIntegration` provides the stable consumer-facing interface for semantic retrieval.

## Supported Operations

### Content Retrieval

`retrieveByContent`

Retrieves semantic context associated with a content identifier.

### Entity Retrieval

`retrieveByEntity`

Retrieves semantic context starting from an entity and optionally performs bounded graph traversal.

### Generic Retrieval

`retrieve`

Accepts a `SemanticRetrievalRequest` and returns semantic retrieval results.

## Dependency Flow

Semantic Retrieval Integration
↓
Semantic Retrieval Runtime
↓
Knowledge Query Runtime
+
Knowledge Traversal Runtime
+
Semantic Knowledge Runtime
+
Entity Storage
+
Knowledge Graph Persistence

## Design Principle

Consumers should depend on the integration boundary rather than instantiate internal retrieval dependencies directly.

## Current Status

MELKISM v0.5.2 Semantic Retrieval Integration completed and E2E validated.
