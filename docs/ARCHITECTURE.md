# MELKISM Architecture

## Product

MELKISM is an independent multilingual media, research and intelligence
platform within the broader MELKIST ecosystem.

## Independence

MELKISM must run independently from MELKIST.

MELKIST repository, database, deployment and source files must not be modified
as part of MELKISM development.

## Future Integration

Integration with MELKIST will occur through explicit contracts, APIs and
adapters.

Current integration status:

DISABLED

## Integration Boundary

The integration boundary is located at:

lib/integrations/melkist/

No direct MELKIST dependency is allowed outside this boundary.

## Languages

- fa: Persian / RTL
- en: English / LTR
- ar: Arabic / RTL
- tr: Turkish / LTR

## Core Domains

- News
- Articles
- Research
- Reports
- Markets
- Cities
- Countries
- Trends
- Data
- Intelligence

## Architectural Principle

Independent first.
Integrated later.
No dependency on the parent application.
