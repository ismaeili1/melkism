# MELKISM v6.13 — Controlled Global Security Headers Enforcement

## Purpose

v6.13 activates the vetted security-header policy at the Next.js global response layer.

## Global Enforcement Point

The global enforcement point is:

`next.config.ts`

The following headers are globally configured:

- Content-Security-Policy
- Referrer-Policy
- X-Frame-Options
- X-Content-Type-Options
- Permissions-Policy
- Cache-Control

## CSP

The v6.10 baseline CSP is used:

`default-src 'self'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; object-src 'none';`

This policy intentionally does not use unsafe inline/script allowances.

## HSTS

HSTS is NOT globally enabled in v6.13.

It remains a controlled deployment decision because HSTS should only be enabled when the production HTTPS topology is fully verified.

## Safety Gate

Automatic modification is refused when:

- an existing headers() function is detected
- an existing headers property is detected
- an existing CSP is detected
- an existing HSTS policy is detected
- the Next.js config does not match the expected typed-object structure

This prevents an automated phase from silently overwriting application behavior.

## API

`GET /api/security-global-headers`

This endpoint verifies the registered policy.

## UI

`/[locale]/security-global-headers`

Supported locales:

- fa
- en
- ar
- tr

## Existing Security Layers

Preserved:

- Application Security v6.6
- Request Protection v6.7
- Security Audit v6.8
- Security Posture v6.9
- Security Policy v6.10
- Security Enforcement v6.11
- Security Deployment Audit v6.12

## Database

No Prisma migration.

## Dependencies

No new dependency.

## Deployment Snapshot

Before modifying `next.config.ts`, the previous configuration is copied to:

`docs/security-audit/next.config.v6.13.pre-enforcement.txt`

This snapshot is an audit artifact and does not modify the original Git history.

## Operational Note

A browser-level smoke test should be executed after deployment to verify CSP compatibility with actual production assets, external services, fonts, analytics and image sources.
