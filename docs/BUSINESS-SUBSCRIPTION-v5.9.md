# MELKISM v5.9 - Business & Subscription

MELKISM v5.9 establishes the Business and Subscription foundation.

The module provides a normalized business account boundary and a
subscription-plan boundary.

Supported business account types:

- individual
- professional
- agency
- developer
- enterprise

Supported subscription tiers:

- free
- professional
- business
- enterprise

Supported subscription states:

- inactive
- trialing
- active
- past_due
- cancelled
- expired

Supported intervals:

- monthly
- yearly

Supported locales:

- fa
- en
- ar
- tr

The current implementation uses deterministic foundation data.

The v5.9 module does not:

- modify Prisma
- create database migrations
- replace existing user identity systems
- replace existing profile systems
- replace existing payment systems
- modify MELKIST

API:

/api/business-subscription

Frontend:

/[locale]/business

The normalized business and subscription contracts are designed to
be connected later to persistent accounts, billing providers,
entitlements, teams, analytics and production payment processing.
