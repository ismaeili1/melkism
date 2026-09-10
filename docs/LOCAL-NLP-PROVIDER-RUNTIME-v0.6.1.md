
MELKISM v0.6.1 — Deterministic Local NLP Provider Runtime
Runtime Purpose

The deterministic local NLP runtime provides a real executable implementation of the AI/NLP Provider Contract without requiring external services.

Supported Operations
Entity Extraction

The runtime applies deterministic rule patterns and produces normalized entity records.

Current rule examples include:

MELKISM
real estate
property
project
Semantic Extraction

The runtime derives deterministic topics and concepts from recognized terms.

Classification

The runtime maps recognized text patterns to deterministic labels such as:

REAL_ESTATE

ARCHITECTURE

GENERAL

Determinism

The implementation is deterministic:

identical input produces identical output
no network request is performed
no random values are used
no external model is required
Error Handling

Empty text is rejected before processing.

Unsupported provider operations are outside the declared capability boundary.

Registry Integration

The runtime is registered using:

createLocalNLPRegistry

The consumer-facing integration uses:

createLocalNLPProviderIntegration

E2E Validation

The v0.6.1 E2E smoke test verifies:

provider identity
capability discovery
registry registration
provider selection
capability checks
entity extraction
semantic extraction
classification
empty-input validation
Scope

This implementation is an architectural foundation.

It is not intended to represent production-grade linguistic NLP accuracy.rn