# MELKISM v6.6 - Application Security Hardening Foundation

## Purpose

v6.6 introduces a vendor-neutral application security boundary
without changing authentication, billing, Prisma or environment
configuration.

## Security controls

The foundation defines:

- HTTP method policy
- safe method policy
- mutation method policy
- content-type validation
- request path length limit
- origin length boundary
- security response headers
- secret-safe diagnostics

## APIs

`/api/security-status`

Returns the application security baseline.

`/api/security-validate`

Validates the current request against the application security
policy.

## Response headers

The security endpoints apply:

- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- Referrer-Policy: strict-origin-when-cross-origin
- Cache-Control: no-store

## Frontend

`/[locale]/security-status`

Supported locales:

- fa
- en
- ar
- tr

Persian and Arabic use RTL.

## Security boundary

v6.6 does not:

- read secret values
- print secret values
- modify .env files
- modify Prisma
- create database migrations
- modify authentication
- modify billing
- modify Property Marketplace
- modify Business Subscription
- modify previous production layers
- modify MELKIST

## Dependency policy

No new npm dependency is required.

## Future security integrations

The security boundary can later connect to:

- CSRF protection
- authentication middleware
- rate limiting
- security audit logs
- WAF
- bot protection
- CSP policy
- trusted-origin configuration
- security monitoring
- incident response

## Completion

v6.6 passes when:

- source files exist
- TypeScript passes
- ESLint passes
- production build passes
- security source checks pass
- final structural verification passes
