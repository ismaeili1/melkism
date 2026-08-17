/**
 * MELKISM Provenance Pipeline
 *
 * v0.2.3
 *
 * Defines the provenance information carried with ingested content.
 */

export type ProvenanceId = string;

export type ProvenanceStage =
  | "source"
  | "fetch"
  | "normalization"
  | "validation"
  | "ingestion";

export type ProvenanceRecord = {
  id: ProvenanceId;
  sourceId: string;
  sourceUrl?: string;
  sourceVersion?: string;

  stage: ProvenanceStage;

  observedAt: string;
  fetchedAt?: string;
  normalizedAt?: string;

  contentHash?: string;

  adapterName?: string;
  adapterVersion?: string;

  normalizationVersion?: string;

  locale?: string;

  parentId?: ProvenanceId;

  metadata?: Record<string, string | number | boolean | null>;
};