# MELKISM v2.93 — API Ecosystem

## Purpose

Phase 293 establishes the unified API ecosystem foundation for MELKISM.

The architecture is additive and sits above existing domain APIs.

## Scope

- API Registry
- API Versioning
- Endpoint Contracts
- Consumers
- Applications
- Key Metadata
- API Scopes
- Rate Limits
- Quotas
- Usage
- Webhooks
- Subscriptions
- Health
- API Governance
- Developer Portal Foundation

## Architecture

Domain Services / Domain APIs
↓
API Ecosystem Foundation
↓
Registry / Versioning / Endpoint Contracts
↓
Consumers / Applications / Scopes
↓
Rate Limits / Quotas / Usage
↓
Webhooks / Subscriptions / Health
↓
Governance / Developer Ecosystem

## Security Boundary

This phase does not implement:

- real secret-value storage
- OAuth provider integration
- external API gateway deployment
- external API management platform
- production credential issuance
- Prisma migration
- payment integration
- external webhook delivery infrastructure

Key objects intentionally expose metadata only.

## API Families Registered

- Property Platform
- Transactions
- Architecture Intelligence
- Construction Intelligence
- Smart City Intelligence
- Global Expansion

## API Contract Principles

1. Every API has an owner.
2. Every API has explicit lifecycle state.
3. Every API has an explicit version.
4. Endpoints expose HTTP method and contract metadata.
5. Authentication requirements are explicit.
6. Required scopes are explicit.
7. Rate-limit policies are explicit.
8. Quotas are explicit.
9. Usage telemetry has a standard record shape.
10. Webhook subscriptions are represented separately from delivery infrastructure.
11. Health status is modeled independently from business APIs.
12. Governance is cross-cutting.

## Internationalization

The API ecosystem is locale-neutral at the contract layer.

UI and documentation remain compatible with:
- fa
- en
- ar
- tr

## Production Boundary

Phase 293 is a foundation.

Real gateway enforcement, secrets, external identity, production rate limiting, distributed usage telemetry, webhook delivery, and operational infrastructure belong to later production/DevOps phases.