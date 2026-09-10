# MELKISM v5.2 — AI RECOMMENDATION PLATFORM

## Status

v5.2 establishes a unified recommendation platform on top of the MELKISM Search Intelligence layer.

## Supported domains

- Property
- Market
- Architecture
- City
- Research
- News
- Data
- General discovery

## Supported strategies

- Intent
- Interest
- Cross-domain
- Balanced

## Locales

- fa
- en
- ar
- tr

## API

GET:

`/api/recommendations?q=<query>&locale=<locale>&context=<context>&strategy=<strategy>&limit=<n>`

POST:

`/api/recommendations`

## User interface

- `/fa/recommendations`
- `/en/recommendations`
- `/ar/recommendations`
- `/tr/recommendations`

## Architecture

`lib/recommendation-platform/`

The platform consumes the Search Intelligence document registry from:

`lib/search-intelligence/`

This avoids maintaining a second content catalog.

## Recommendation signals

Current v5.2 ranking supports:

- Context/domain relevance
- Preferred content type
- Interest matching
- Recent-query matching
- Title relevance
- Cross-domain discovery
- Strategy weighting
- Explainable recommendation reasons

## Future extensions

The platform boundary is designed for later integration of:

- user behavior
- personalized profiles
- semantic embeddings
- vector search
- knowledge graph signals
- collaborative filtering
- property preferences
- market preferences
- real-time ranking
- AI explanation and synthesis
