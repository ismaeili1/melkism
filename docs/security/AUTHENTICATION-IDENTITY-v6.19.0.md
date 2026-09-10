# MELKISM v6.19.0 — Authentication & Identity Foundation

## Authentication

- Auth.js / NextAuth 5
- Credentials provider
- JWT session strategy
- Prisma-backed user identity
- bcryptjs password hashing

## Identity fields

The canonical User model contains:

- passwordHash
- emailVerifiedAt
- lastLoginAt

Plaintext passwords are never persisted.

## Password policy

Minimum password length: 12 characters.

bcrypt cost factor: 12.

bcrypt truncation is explicitly rejected.

## Routes

- /login
- /api/auth/[...nextauth]

## Environment

AUTH_SECRET is stored in .env.local.

.env.local must not be committed.

.env.example contains an empty AUTH_SECRET placeholder.

## Scope boundary

Authorization, roles, permissions, account recovery, MFA and external OAuth providers are deferred to subsequent controlled phases.

## Database safety

No migration was executed.

No database mutation was executed.

No prisma db push was executed.

No prisma migrate command was executed.

## Dependency security note

Dependency vulnerabilities reported during installation are preserved for the dedicated security audit phase.

No forced dependency upgrade was executed.
