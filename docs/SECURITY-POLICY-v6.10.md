# MELKISM v6.10 — Security Policy & Secure Headers Foundation

## Purpose

v6.10 introduces a centralized security policy registry for secure HTTP response headers and baseline browser security policy.

## Included Controls

- Content-Security-Policy
- Referrer-Policy
- X-Frame-Options
- X-Content-Type-Options
- Permissions-Policy
- Cache-Control
- HSTS reference policy

## Important Safety Decision

This version does not automatically modify existing:

- middleware.ts
- next.config.ts
- next.config.js
- next.config.mjs
- next.config.cjs

The project may already contain global security headers or routing behavior.

Therefore v6.10 provides a reusable policy service and API/UI registry without performing a potentially breaking global configuration rewrite.

## CSP

The baseline CSP is intentionally conservative:

- default-src self
- base-uri self
- form-action self
- frame-ancestors none
- object-src none

The policy is exposed as a controlled-response policy reference.

It is not automatically injected globally in this phase.

## HSTS

HSTS is included as a deployment reference policy.

It is not automatically enabled globally by this phase because HSTS configuration must be coordinated with the actual HTTPS deployment topology.

## API

`GET /api/security-policy`

The endpoint returns policy metadata and status.

It does not return application secrets.

## UI

`/[locale]/security-policy`

Supported locales:

- fa
- en
- ar
- tr

## Reusable Header Application

The module exports:

`applySecurityHeaders(headers, input)`

Future controlled API routes can use this helper without duplicating policy definitions.

## Security Guarantees

v6.10:

- adds no dependency
- performs no Prisma migration
- does not expose environment secrets
- does not store request bodies
- does not inspect authentication tokens
- does not replace request-protection
- does not replace security-audit
- does not replace application-security
- does not modify MELKIST

## Runtime Characteristics

The policy service is deterministic and stateless.

No persistent security database is introduced.

## Future Hardening

A later dedicated deployment-security phase may apply approved headers globally after auditing the existing production middleware and Next.js configuration.
