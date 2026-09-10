# MELKISM v0.7.0 — Intelligence Orchestration Architecture

## Purpose

v0.7.0 establishes the Intelligence Orchestration layer above the AI/NLP Provider and Intelligence Pipeline boundaries.

The Orchestrator coordinates multiple intelligence operations without depending on a concrete provider implementation.

## Architecture

```text
Content
   ↓
Intelligence Orchestration
   ↓
Pipeline Provider Integration
   ↓
Provider Registry / Selection
   ↓
AINLPProviderContract
   ↓
Selected AI/NLP Provider
Orchestration Contract

IntelligenceOrchestrationContract defines the boundary for coordinating one or more AI/NLP operations.

An operation contains:

capability
provider
content ID
source text
optional metadata

The orchestration response contains normalized results for each operation.

Runtime Characteristics

The v0.7.0 runtime is:

sequential
deterministic
provider-agnostic
capability-aware
fail-fast
Operation Flow

Before execution, the runtime verifies that the selected provider supports the requested capability.

Only then is the operation executed through the Pipeline Provider Integration boundary.

Multiple Operations

A single orchestration request may contain multiple operations.

The current foundation executes them in request order and preserves result order.

Current Scope

v0.7.0 does not include:

retry policies
fallback providers
parallel orchestration
workflow graphs
model routing policies
learning-based orchestration

These belong to later orchestration layers.

Architectural Principle

The Orchestrator coordinates capabilities.

It does not implement provider-specific NLP logic.rn