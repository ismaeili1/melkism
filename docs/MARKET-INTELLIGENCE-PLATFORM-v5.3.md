# MELKISM v5.3 — MARKET INTELLIGENCE PLATFORM

## Purpose

v5.3 establishes a unified Market Intelligence boundary for MELKISM.

## Domains

- Residential
- Commercial
- Industrial
- Land
- Office
- Retail
- Hospitality

## Intelligence signals

- Price index
- Annual change
- Demand index
- Supply index
- Transaction activity
- Investment score
- Market direction
- Market risk
- Data confidence

## API

GET:

`/api/market-intelligence?locale=en`

Optional parameters:

- `segment`
- `minInvestmentScore`
- `limit`

## UI

- `/fa/market-intelligence`
- `/en/market-intelligence`
- `/ar/market-intelligence`
- `/tr/market-intelligence`

## Data status

v5.3 currently uses normalized foundation intelligence data.

It is intentionally not presented as a live market feed.

## Architectural role

Market Intelligence is separated from:

- Search Intelligence
- Recommendation Platform
- Existing market pages
- Future external data ingestion

This creates a stable boundary for later integration of:

- real market datasets
- source provenance
- time series
- geographic market entities
- property transactions
- economic indicators
- macroeconomic signals
- forecasting
- risk models
- AI market explanations
- knowledge graph market relationships
- real-time ingestion
