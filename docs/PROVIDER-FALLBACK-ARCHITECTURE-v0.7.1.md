
MELKISM v0.7.1 — Provider Fallback Architecture
Purpose

v0.7.1 establishes deterministic provider fallback for Intelligence Orchestration.

Execution Flow
Primary Provider
      ↓
Capability Check
      ↓
Execution
      ↓
Failure / Unsupported
      ↓
Next Candidate
      ↓
Fallback Provider
Fallback Rules

The integration tracks attempted providers.

A provider that has already been attempted cannot be selected again.

Fallback candidates are evaluated in deterministic policy order.

Failure Conditions

Fallback may occur when:

capability is unsupported
provider execution fails

Execution fails when no remaining provider candidate is available.

Boundary

Fallback does not implement:

retry loops for the same provider
parallel execution
provider-specific recovery
AI model selection
vendor-specific logic
Composition

The Policy Composition contains:

deterministic policy runtime
deterministic fallback runtime

The Orchestration Integration consumes both through dependency composition.

Validation

The v0.7.1 E2E test covers:

priority selection
primary success
execution failure fallback
unsupported primary fallback
fallback decision
no-provider failure
duplicate candidate normalizationrn