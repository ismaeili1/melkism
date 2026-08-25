# MELKISM v0.5.3 — Retrieval Ranking Architecture

## Purpose

v0.5.3 introduces a deterministic relevance and ranking boundary for semantic retrieval results.

## Architecture

Semantic Retrieval
↓
Ranking Signal Extraction
↓
Ranking Contract
↓
Deterministic Ranking Runtime
↓
Ranked Retrieval Results

## Ranking Signals

The foundation currently supports:

- semantic score
- term match score
- entity context score
- graph context score

## Default Weights

The deterministic foundation uses:

- semantic: 0.40
- term match: 0.25
- entity context: 0.20
- graph context: 0.15

The weights are configurable through the ranking request.

## Determinism

Ranking is deterministic.

When scores are equal, content identifiers provide a stable secondary ordering.

## Score Boundary

Ranking scores are normalized to the range:

`0..1`

## Architectural Boundary

Ranking does not own:

- retrieval
- semantic knowledge persistence
- graph persistence
- AI inference
- vector search

Ranking consumes retrieval results and returns ranked results.

## Future Extensions

Later versions may introduce:

- learned ranking
- embedding similarity
- semantic relevance
- personalized ranking
- feedback-based ranking
