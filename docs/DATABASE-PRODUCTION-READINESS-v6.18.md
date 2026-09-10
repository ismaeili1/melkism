# MELKISM v6.18 — Database & Prisma Production Readiness

## Purpose

This phase verifies that the MELKISM database and Prisma layer are suitable
for controlled production deployment.

The phase does not modify the Prisma schema and does not execute migrations.

## Verification scope

The phase validates:

- Prisma installation and CLI availability
- Prisma schema presence
- Prisma schema validity
- Prisma client generation
- Prisma-related package configuration
- migration directory state
- database provider detection
- DATABASE_URL presence and safe format validation
- optional real database connectivity
- production build
- TypeScript
- ESLint
- runtime API availability

## Migration safety

The following operations are explicitly prohibited from automatic execution:

- prisma migrate dev
- prisma migrate deploy
- prisma db push
- prisma db pull
- prisma migrate reset

Migration deployment is a separate controlled release operation.

## Secret safety

Connection-string values are never written to the report.

Only metadata such as "configured", "format valid", or "not configured"
is recorded.

## Completion criteria

v6.18 is PASS only when:

- Prisma schema validation passes.
- Prisma Client generation passes.
- TypeScript passes.
- ESLint passes.
- production build passes.
- runtime API starts successfully.
- no forbidden automatic migration operation is executed.
- database configuration is audited.
- if DATABASE_URL is available, its shape is valid and Prisma connection
  verification succeeds.
