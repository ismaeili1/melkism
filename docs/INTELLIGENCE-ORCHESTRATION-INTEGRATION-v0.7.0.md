
MELKISM v0.7.0 — Intelligence Orchestration Integration
Consumer Boundary

IntelligenceOrchestrationProviderIntegration exposes the stable consumer-facing orchestration boundary.

Consumers provide an IntelligenceOrchestrationRequest and receive an IntelligenceOrchestrationResponse.

Composition

The orchestration composition connects:

Provider Registry
      ↓
Provider Runtime Integration
      ↓
Pipeline Provider Bridge
      ↓
Pipeline Provider Runtime Integration
      ↓
Intelligence Orchestration Runtime
Supported Operations

The foundation supports any capability declared by the common AINLPProviderContract.

The v0.7.0 E2E validation uses:

ENTITY_EXTRACTION
SEMANTIC_EXTRACTION
CLASSIFICATION
Error Semantics

The current runtime fails fast when:

a provider does not exist
a provider does not support the requested capability
provider execution fails
Result Preservation

Each result preserves:

operation
provider
content ID
provider result
optional confidence
optional metadata
Provider Independence

The orchestration layer has no dependency on:

OpenAI SDK
a concrete cloud provider
the deterministic local provider
API keys
external network access

Providers remain replaceable through the registry boundary.

Validation

The v0.7.0 E2E smoke test validates:

orchestration composition
result count
operation order
provider identity
entity extraction
semantic extraction
classification
unsupported capability handling
missing-provider handling
empty orchestration requestsrn