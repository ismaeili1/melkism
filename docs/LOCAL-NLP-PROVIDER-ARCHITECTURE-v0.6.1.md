# MELKISM v0.6.1 — Local NLP Provider Architecture

## Purpose

v0.6.1 introduces the first executable AI/NLP provider implementation for MELKISM.

The implementation is deliberately local, deterministic, and provider-independent.

## Architecture

```text
AINLPProviderContract
        ↓
LocalNLPProviderContract
        ↓
DeterministicLocalNLPProvider
        ↓
ProviderRegistryRuntime
        ↓
ProviderRuntimeIntegration
Provider Identity

Logical provider:

local-deterministic-nlp

Registry name:

local-nlp

Capabilities

The local provider supports:

ENTITY_EXTRACTION
SEMANTIC_EXTRACTION
CLASSIFICATION
Languages

The initial declared language set is:

fa
en
ar
tr

The language list represents the provider boundary. It does not imply language-specific linguistic quality beyond the deterministic rule implementation.

Architectural Constraints

The provider does not depend on:

vendor SDKs
external networks
API keys
cloud AI services
model hosting infrastructure
Integration

The local provider is registered through:

createLocalNLPRegistry

and can be consumed through:

createLocalNLPProviderIntegration

Future Providers

The same AINLPProviderContract can later support:

hosted AI providers
local ML models
specialized NLP services
embedding providers

without changing the Registry boundary.rn