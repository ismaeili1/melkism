
MELKISM v0.6.0 — AI/NLP Provider Registry
Registry Boundary

The Provider Registry manages AI/NLP providers without coupling the Intelligence Core to a specific implementation.

Lifecycle
register
   ↓
select / get
   ↓
capability inspection
   ↓
execute
   ↓
replace / unregister
Registry Operations
register

Registers a provider under a unique logical name.

replace

Replaces an existing provider implementation.

unregister

Removes a provider from the registry.

has

Checks whether a provider exists.

list

Returns registered provider names in deterministic order.

get

Returns a registered provider by name.

createComposition

Creates a ProviderComposition over registered providers.

createCapabilityRuntime

Creates a capability runtime for a selected provider.

Capability Runtime

The capability runtime exposes:

getCapabilities
supports
assertSupports
getProviderName
getSupportedLanguages
Integration

ProviderRuntimeIntegration is the consumer-facing boundary for registry operations and capability inspection.

Consumers do not need to know the underlying registry implementation.

Current Scope

v0.6.0 intentionally does not contain a production AI/NLP adapter.

Provider-specific SDK and infrastructure integrations belong to later versions.rn