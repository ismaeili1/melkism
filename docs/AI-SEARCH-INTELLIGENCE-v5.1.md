# MELKISM v5.1 — AI SEARCH INTELLIGENCE

## Purpose

MELKISM v5.1 establishes the first integrated Search Intelligence layer for the platform.

## Capabilities

- Multi-language search foundation
- Intent detection
- Query normalization
- Relevance scoring
- Search result ranking
- Search API
- Locale-aware search interface
- Property / Market / Architecture / City / News / Report / Data / Article discovery

## Supported locales

- fa
- en
- ar
- tr

## API

GET:

`/api/ai-search-intelligence?q=<query>&locale=<locale>&limit=<n>`

## Architecture

`lib/search-intelligence/`

- `search.types.ts`
- `search.service.ts`
- `index.ts`

## UI

`app/[locale]/search/page.tsx`

## Next Intelligence Layer

The following versions can replace the deterministic ranking layer with:

- semantic embeddings
- vector retrieval
- knowledge graph retrieval
- personalized ranking
- AI answer synthesis
- hybrid lexical + semantic search
- source provenance
