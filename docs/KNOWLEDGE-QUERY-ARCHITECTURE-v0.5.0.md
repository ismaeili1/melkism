# MELKISM v0.5.0 — Knowledge Query Architecture

## Purpose

The Knowledge Query layer provides a stable query boundary over Semantic Knowledge, entities, and Knowledge Graph relationships.

## Query Flow

Knowledge Query
↓
Semantic Knowledge Runtime
↓
Entity Storage Runtime
↓
Knowledge Graph Persistence Runtime

## Supported Queries

### Content

`findByContentId`

### Entity

`findEntityById`

### Relationships

`findOutgoingRelationships`

`findIncomingRelationships`

### Traversal

`findNeighbors`

The current traversal implementation is intentionally one-hop.

## Integration

`SemanticKnowledgeQueryIntegration` connects:

- Semantic Knowledge Runtime
- Entity Storage Runtime
- Knowledge Graph Persistence Runtime

## Future Extensions

The contract is designed to support future:

- multi-hop traversal
- graph path queries
- semantic filtering
- ranking
- relevance scoring
- knowledge-aware retrieval
