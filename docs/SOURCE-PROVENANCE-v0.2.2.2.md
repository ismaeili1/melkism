# MELKISM v0.2.2.2
# Source & Provenance Foundation

## 1. Purpose

This release establishes the canonical source and provenance
contract for MELKISM.

The system is designed for a future international content
platform covering real estate, property markets, architecture,
urban development, investment, research and the built
environment.

This contract is independent from MELKIST.

---

# 2. Source

A Source represents an identifiable origin of information.

A source has:

- Identity
- Type
- Authority Level
- Geography
- Language
- Access Methods
- Verification Status
- Lifecycle State

---

# 3. Source Identity

Each source may have:

- ID
- Name
- Slug
- Description

The source identity must remain stable even if its access
mechanism changes.

---

# 4. Source Types

MELKISM recognizes the following source categories:

1. Official
2. Government
3. Academic
4. Research Institute
5. International Organization
6. Industry
7. Media
8. Professional
9. Other

These categories describe the origin of the source and are not
equivalent to an authority ranking.

---

# 5. Authority Levels

Authority is represented separately from source type.

Levels:

- Primary
- Authoritative
- Recognized
- Secondary
- Community
- Unknown

This separation is intentional.

For example, a government source and an academic source are
different source types, while both may contain primary material.

---

# 6. Verification

Source verification status:

- Unverified
- Pending
- Verified
- Rejected
- Suspended

A future editorial or automated verification system may update
this status.

---

# 7. Access Methods

MELKISM supports the following access method contracts:

- RSS
- Atom
- API
- Web
- Feed
- Manual

This release only defines the contract.

No ingestion engine is implemented here.

---

# 8. Geography

A source may contain:

- Country
- Region
- City

Country information should eventually use stable ISO-style
country identifiers rather than display names alone.

---

# 9. Language

Every source has a primary language.

Optional supported languages may also be recorded.

Initial platform languages:

- fa
- en
- ar
- tr

The source language is independent from the language in which
MELKISM publishes a derived or translated item.

---

# 10. Provenance

Provenance answers:

> Where did this content originate?

A provenance record may contain:

- Source ID
- Original URL
- Canonical URL
- Retrieved At
- Published At
- Original Language
- Original Title
- Original Author
- Attribution
- Source Version

---

# 11. Original Content vs Derived Content

MELKISM distinguishes between original and derived content.

Example:

Original:

English article
    ↓
Source: Academic Institution
    ↓
Original URL

Derived:

Persian translation
Arabic translation
Turkish translation

The translated version must remain associated with the
original content and its provenance.

---

# 12. Translation Relationship

Translation does not replace the original.

Conceptually:

Original Content
    |
    +--- Persian
    |
    +--- Arabic
    |
    +--- Turkish

Each derivative remains traceable to the original.

---

# 13. Attribution

MELKISM should preserve appropriate attribution information
for externally sourced material.

The provenance contract therefore supports:

- Original author
- Source identity
- Original URL
- Attribution

Future editorial rules will determine the exact publication
format.

---

# 14. Canonical URL

Where available, the canonical URL should be preserved.

This is important for:

- Duplicate detection
- Source identification
- Content reconciliation
- Search indexing
- Provenance
- Editorial review

---

# 15. Retrieval Time vs Publication Time

These are intentionally separate.

`publishedAt`

means when the original source published the material.

`retrievedAt`

means when MELKISM obtained or observed the material.

This distinction is essential for future automated ingestion.

---

# 16. Source Version

A source may expose changing versions of the same information.

`sourceVersion` provides an optional place to preserve such
information.

The field does not define a versioning mechanism yet.

---

# 17. Architectural Boundary

The Source system belongs entirely to MELKISM.

No MELKIST model, repository, database, API or file is required
by this contract.

Future integration, if ever required, must occur through an
explicit MELKISM integration boundary.

---

# 18. Deliberately Excluded From v0.2.2.2

The following are NOT implemented:

- RSS crawler
- Atom crawler
- Web crawler
- API ingestion
- Scraping
- Automated translation
- AI processing
- Database migration
- Search indexing
- Content deduplication engine
- Source ranking engine
- MELKIST integration

They will be addressed only after their architectural
contracts are defined.

---

# 19. Future Source Intelligence

Later versions may introduce:

- Source Registry
- Source Health
- Source Reliability Score
- Feed Monitoring
- API Connectors
- Ingestion Jobs
- Duplicate Detection
- Content Fingerprints
- Change Detection
- Translation Pipeline
- Editorial Verification
- Provenance Graph

These capabilities must consume the contracts established here.

---

# 20. Architectural Principle

MELKISM must always be able to answer:

1. What is this content?
2. Where did it come from?
3. Who originally published it?
4. When was it published?
5. When did MELKISM retrieve it?
6. In what language was it originally published?
7. Is this the original or a derivative?
8. What content is this translation derived from?
9. What source should receive attribution?

This is the foundation of trustworthy international
real-estate intelligence.