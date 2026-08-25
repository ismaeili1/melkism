# MELKISM v0.5.1 — Multi-Hop Traversal Architecture

## Traversal Model

```text
Entity A
  ↓ Relationship 1
Entity B
  ↓ Relationship 2
Entity C A traversal request defines:

starting entity
maximum depth
traversal direction
maximum result count
Path Model

A traversal path preserves:

entity IDs
relationship IDs
depth
Cycle Protection

The runtime prevents revisiting an entity already present in the current path.

Visited entities and relationships are tracked in the traversal result.

Direction Modes
OUTGOING

Follows relationships from the current entity.

INCOMING

Follows relationships targeting the current entity.

BOTH

Combines outgoing and incoming relationships.

Current Boundary

The v0.5.1 implementation intentionally does not introduce:

ranking
semantic scoring
AI inference
graph database dependencies
unbounded traversal

These capabilities belong to later phases.rn