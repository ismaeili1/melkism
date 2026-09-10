# MELKISM v6.16 — Production HTTP Security Header Smoke Verification

## Purpose

MELKISM v6.16 validates the active security-header policy against real HTTP
responses produced by the Next.js production server.

This phase does not modify `next.config.ts`.

## Scope

The smoke verification checks:

- Content-Security-Policy
- Referrer-Policy
- X-Frame-Options
- X-Content-Type-Options
- Permissions-Policy
- API Cache-Control

HSTS remains intentionally disabled according to the current MELKISM policy.

## Runtime verification

The production sequence is:

1. Validate project structure.
2. Validate the current `next.config.ts` contract.
3. Run TypeScript validation.
4. Run ESLint.
5. Run production build.
6. Start the production server locally.
7. Verify a normal locale route through HTTP.
8. Verify the v6.16 API route through HTTP.
9. Validate actual response headers.
10. Validate API-only Cache-Control scope.
11. Validate HSTS is absent.
12. Write an immutable audit report.
13. Stop the production test server.

## Authority

The PowerShell smoke-test result is authoritative for this phase because
it checks actual HTTP response headers rather than source text only.

## Safety

The phase must not alter `next.config.ts`.

Existing files under the v6.16 target paths are treated as protected and the
phase bootstrap refuses to overwrite them.

## Expected policy

Global:

- Content-Security-Policy:
  `default-src 'self'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; object-src 'none';`
- Referrer-Policy:
  `strict-origin-when-cross-origin`
- X-Frame-Options:
  `DENY`
- X-Content-Type-Options:
  `nosniff`
- Permissions-Policy:
  `camera=(), microphone=(), geolocation=(), payment=(), usb=()`

API:

- Cache-Control:
  `no-store, max-age=0`

## Completion criteria

v6.16 is complete only when:

- `tsc --noEmit` passes.
- `npm run lint` passes.
- `npm run build` passes.
- production server starts.
- locale HTTP smoke test passes.
- API HTTP smoke test passes.
- all expected headers match exactly.
- HSTS is absent.
- audit report is generated with PASS.
