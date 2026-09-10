# MELKISM v0.6.0 — AI/NLP Provider Architecture

## Purpose

v0.6.0 establishes a provider-agnostic AI/NLP architecture for the MELKISM Intelligence layer.

The Intelligence Core does not depend directly on a vendor SDK, model runtime, or external AI service.

## Architecture

```text
Intelligence Core
      ↓
AINLPProviderContract
      ↓
Provider Registry
      ↓
Provider Selection
      ↓
Provider Capability Runtime
      ↓
Provider Adapter
Provider Contract

The provider boundary defines:

provider capabilities
language support
execution requests
execution responses
provider identity
optional confidence and metadata
Supported Capabilities

The initial capability taxonomy includes:

ENTITY_EXTRACTION
SEMANTIC_EXTRACTION
CLASSIFICATION
Runtime Components
ProviderCapabilityRuntime

Provides:

capability discovery
capability checks
capability assertions
provider identity
supported languages
ProviderRegistryRuntime

Provides:

provider registration
provider replacement
provider removal
provider lookup
deterministic provider listing
composition creation
capability runtime creation
ProviderComposition

Provides provider selection through a technology-independent boundary.

ProviderRuntimeIntegration

Provides a stable consumer-facing API over registry and capability operations.

Independence

The provider foundation does not require:

a vendor SDK
an external network call
API key access
a specific AI model
a specific cloud provider

Production adapters will be introduced in subsequent phases.

Validation

v0.6.0 has been validated through a mock-provider E2E flow covering:

provider registration
provider listing
provider selection
capability discovery
capability support checks
capability assertions
execution
replacement
unregister
missing-provider handlingrn