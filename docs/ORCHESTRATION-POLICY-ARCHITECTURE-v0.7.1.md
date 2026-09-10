# MELKISM v0.7.1 — Orchestration Policy Architecture

## Purpose

v0.7.1 introduces deterministic provider selection policy above the v0.7.0 orchestration runtime.

The policy determines provider ordering without implementing provider-specific AI/NLP logic.

## Selection Model

```text
Orchestration Operation
        ↓
Candidate Providers
        ↓
Priority Ordering
        ↓
Deterministic Tie Break
        ↓
Selected Provider
Provider Candidate

Each candidate contains:

provider name
priority

Lower priority values represent higher precedence.

Determinism

Candidates are ordered by:

priority
provider name

Provider names are used as a stable secondary ordering when priorities are equal.

Candidate Normalization

Duplicate providers are normalized.

When the same provider appears multiple times, the candidate with the strongest priority is retained.

Blank provider names are ignored.

Scope

The policy does not:

execute providers
call external services
implement AI/NLP logic
access credentials
perform retries

It only produces a deterministic selection decision.rn