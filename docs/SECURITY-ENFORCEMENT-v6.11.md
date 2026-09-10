# MELKISM v6.11 — Security Headers Enforcement & Deployment Adapter Foundation

## Purpose

v6.11 turns the v6.10 security policy registry into a controlled header enforcement adapter.

The enforcement layer is reusable by API and controlled-response route handlers.

## Architecture

New module:

`lib/security-enforcement`

Files:

- `security-enforcement.types.ts`
- `security-enforcement.constants.ts`
- `security-enforcement.service.ts`
- `index.ts`

API:

`GET /api/security-enforcement`

UI:

`/[locale]/security-enforcement`

## Enforcement Rules

The adapter:

- only accepts an explicit allow-list of security headers
- rejects CR/LF header injection
- validates header name length
- validates header value length
- does not process arbitrary user-defined response headers
- does not expose secrets
- does not read request bodies
- does not persist security state

## Modes

### api

Suitable for diagnostic and security-status API responses.

The CSP policy is not emitted automatically in this mode because API responses do not require the same browser-document policy as HTML responses.

### controlled-response

Suitable for selected response handlers that explicitly opt into the policy.

## HSTS

HSTS is still opt-in at the adapter level.

It is not globally forced because HSTS must be coordinated with the real HTTPS deployment topology.

## Global Middleware

This phase intentionally does not modify:

- middleware.ts
- next.config.ts
- next.config.js
- next.config.mjs
- next.config.cjs

The project may already have routing, caching, CSP, image, font, analytics or other response behavior that requires an integrated audit before global enforcement.

## Compatibility

v6.11 preserves:

- Application Security v6.6
- Request Protection v6.7
- Security Audit v6.8
- Security Posture v6.9
- Security Policy v6.10

## Database

No Prisma migration is performed.

## Dependencies

No npm dependency is added.

## Future Global Enforcement

A later deployment-security hardening phase can apply the vetted adapter through the project's actual global response pipeline after a configuration audit.
