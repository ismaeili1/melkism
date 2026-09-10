# MELKISM v6.14 — Global Header Scope Optimization & Runtime Verification

## Purpose

v6.14 optimizes the scope of security headers introduced by v6.13.

## Global Security Headers

The following remain globally enabled:

- Content-Security-Policy
- Referrer-Policy
- X-Frame-Options
- X-Content-Type-Options
- Permissions-Policy

## Cache-Control Scope

`Cache-Control: no-store, max-age=0` is not globally applied.

It is restricted to:

`/api/(.*)`

This keeps diagnostic/API responses non-cacheable without applying the same policy to public pages and other globally matched responses.

## HSTS

HSTS remains disabled.

## CSP

The v6.13 CSP is preserved.

v6.14 does not redesign CSP or introduce nonce management.

## Runtime Verification

New endpoint:

`GET /api/security-header-scope`

New UI:

`/[locale]/security-header-scope`

## PowerShell Verification

`scripts/melkism-security-header-runtime-check.ps1`

## Compatibility

Preserved:

- Application Security v6.6
- Request Protection v6.7
- Security Audit v6.8
- Security Posture v6.9
- Security Policy v6.10
- Security Enforcement v6.11
- Security Deployment Audit v6.12
- Global Security Headers v6.13

## Database

No Prisma migration.

## Dependencies

No new npm dependency.

## Project Isolation

MELKIST is not modified.

## Validation

The phase validates:

- global security-header presence
- absence of global Cache-Control
- API-only Cache-Control
- HSTS remains disabled
- PowerShell parser
- TypeScript
- ESLint
- production build
