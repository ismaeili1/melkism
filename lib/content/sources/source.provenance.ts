/**
 * MELKISM Content Provenance
 *
 * v0.2.2.2
 *
 * Provenance preserves the relationship between published
 * content and its original source.
 */

export type ContentProvenance = {
  sourceId: string;

  originalUrl: string;

  canonicalUrl?: string;

  retrievedAt: string;

  publishedAt?: string;

  originalLanguage: string;

  originalTitle?: string;

  originalAuthor?: string;

  attribution?: string;

  sourceVersion?: string;
};

export type ContentOrigin = {
  provenance: ContentProvenance;

  isOriginal: boolean;

  derivedFromContentId?: string;

  translationOfContentId?: string;
};