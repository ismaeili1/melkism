# MELKISM v0.7.2
# Reliability Architecture

## Overview

MELKISM v0.7.2 introduces provider reliability infrastructure.

The layer provides:

- Retry management
- Circuit breaker protection
- Provider fallback
- Deterministic execution policy


## Architecture

Orchestration
|
v
Policy Selection
|
v
Provider Runtime
|
+---- Retry Runtime
|
+---- Circuit Breaker Runtime
|
v
Provider Execution



## Retry Runtime

Responsibilities:

- evaluate retry eligibility
- calculate next attempt
- preserve deterministic behavior


## Circuit Breaker

Responsibilities:

- protect unstable providers
- block repeated failures
- track provider health state


States:


CLOSED
|
| failures
v
OPEN
|
| recovery
v
HALF_OPEN



## Provider Fallback

Fallback is policy-driven.

Execution order:


Provider A
|
failure
v
Provider B
|
success



## Architectural Rules

- No vendor lock-in
- No direct OpenAI dependency
- No provider hard-code
- No network dependency
- Deterministic execution


## Version

MELKISM v0.7.2

Reliability + Fallback Foundation
