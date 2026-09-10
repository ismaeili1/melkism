# MELKISM v0.6.2 — Intelligence Pipeline Provider Architecture

## Purpose

v0.6.2 connects the Intelligence Pipeline to the provider architecture established in v0.6.0 and the deterministic local NLP provider established in v0.6.1.

The Pipeline remains independent from any concrete provider implementation.

## Architecture

```text
Content
   ↓
Content Intelligence Pipeline
   ↓
Intelligence Pipeline Provider Bridge
   ↓
Provider Runtime Integration
   ↓
AINLPProviderContract
   ↓
Selected Provider
Pipeline Provider Contract

IntelligencePipelineProviderContract defines the provider resolution boundary used by the Intelligence Pipeline.

It accepts:

provider name
provider capability

and returns an AINLPProviderContract.

Provider Bridge

IntelligencePipelineProviderBridge adapts the generic provider runtime integration to the Pipeline-specific resolution contract.

Runtime Integration

IntelligencePipelineProviderRuntimeIntegration provides:

provider resolution
capability support checks
provider execution
Separation of Concerns

The Pipeline does not own:

provider registration
provider lifecycle
vendor SDKs
API keys
external network calls
local-provider implementation details

Those concerns remain below the Pipeline boundary.

Current Provider Flow

The v0.6.2 E2E path uses:

local-nlp
   ↓
ProviderRuntimeIntegration
   ↓
IntelligencePipelineProviderBridge
   ↓
IntelligencePipelineProviderRuntimeIntegration
   ↓
local-deterministic-nlp
Future Providers

Additional AI/NLP providers can be introduced without changing the Pipeline provider contract.rn