# MELKISM v5.8 - Property Marketplace

MELKISM v5.8 establishes the Property Marketplace foundation.

The module provides a normalized marketplace boundary for:

- sale
- rent
- lease
- investment

Property categories include:

- apartment
- villa
- office
- retail
- land
- industrial
- mixed-use

The implementation is intentionally isolated from existing Prisma
and Property contracts.

Current data is deterministic foundation data.

Future adapters can connect the normalized PropertyListing contract
to:

- Prisma
- Property Intelligence
- Market Intelligence
- Professional verification
- Agency inventories
- External property feeds
- Recommendation systems
- AI property intelligence
- Subscription services
- Future MELKIST integration

API:

/api/property-marketplace

Frontend:

/[locale]/marketplace

Supported locales:

- fa
- en
- ar
- tr

Persian and Arabic use RTL layout.

Protected resources:

- prisma/schema.prisma
- existing Property modules
- existing Marketplace modules
- MELKIST
