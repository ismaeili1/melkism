# MELKISM v6.20.0 — Authorization & Role-Based Access Control

## Objective

Introduce centralized authorization on top of the v6.19.0 authentication foundation.

## Roles

- USER
- EDITOR
- ANALYST
- MODERATOR
- ADMIN
- SUPERADMIN

## Permission model

Authorization supports explicit permissions such as:

- profile:read
- profile:write
- content:read
- content:create
- content:edit
- content:publish
- content:archive
- source:read
- source:create
- source:edit
- taxonomy:manage
- media:manage
- intelligence:read
- intelligence:manage
- users:read
- users:manage
- system:manage

## Authorization APIs

`getAuthorizationContext()`

`requireAuthentication()`

`requireRole()`

`requirePermission()`

`can()`

## Session propagation

The authenticated user's role is copied through:

User record
→ Credentials authorization
→ JWT
→ Session

## Proxy boundary

Restricted path families:

- /dashboard/*
- /admin/*
- /api/admin/*
- /api/management/*

The proxy denies unauthenticated requests to these boundaries.

Fine-grained role and permission checks remain server-side and must be applied at the resource/action boundary.

## Database safety

No migration was executed.

No database mutation was executed.

No prisma db push was executed.

No prisma migrate command was executed.

## Scope intentionally deferred

- password recovery
- MFA
- OAuth identity linking
- organization/tenant permissions
- attribute-based access control
- audit event persistence
- policy administration UI
- database migration execution
