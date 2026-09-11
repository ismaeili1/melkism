/**
 * MELKISM Provenance Pipeline Constants
 *
 * v0.2.3
 */

export const PROVENANCE_PIPELINE_VERSION = "0.2.3";

export const PROVENANCE_STAGES = [
  "source",
  "fetch",
  "normalization",
  "validation",
  "ingestion",
] as const;