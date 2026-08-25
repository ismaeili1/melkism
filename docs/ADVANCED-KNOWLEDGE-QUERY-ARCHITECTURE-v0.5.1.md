# MELKISM v0.5.1 — Advanced Knowledge Query Architecture

## Purpose

v0.5.1 extends the v0.5.0 Knowledge Query foundation with bounded multi-hop graph traversal.

## Architecture

Knowledge Query
↓
Advanced Knowledge Query Runtime
↓
Knowledge Query Runtime
+
Multi-Hop Traversal Runtime
↓
Entity Storage Runtime
+
Knowledge Graph Persistence Runtime

## Advanced Query Capabilities

- advanced query requests
- bounded traversal
- traversal direction
- maximum depth
- maximum result count
- path preservation
- cycle prevention

## Design Principle

v0.5.1 extends the existing v0.5.0 query boundary without replacing:

- Semantic Knowledge Persistence
- Entity Storage
- Knowledge Graph Persistence
- Base Knowledge Query Runtime

## Current Traversal Scope

Traversal is bounded and deterministic.

The current implementation supports:

- OUTGOING
- INCOMING
- BOTH

and configurable:

- maxDepth
- maxResults

## Validation

The E2E smoke test validates:

- one-hop traversal
- two-hop traversal
- incoming traversal
- bidirectional traversal
- result limiting
- cycle protection
- path entity resolutionrn