/**
 * MELKISM Provenance Chain Contract
 *
 * v0.2.3
 *
 * Defines the relationship between provenance records
 * across the content ingestion lifecycle.
 *
 * Contract-only layer.
 */

import type {
  ProvenanceId,
  ProvenanceRecord,
  ProvenanceStage,
} from "./provenance.types";

export type ProvenanceChainNode = {
  id: ProvenanceId;
  stage: ProvenanceStage;
  parentId?: ProvenanceId;
};

export interface ProvenanceChainContract {
  getRoot(record: ProvenanceRecord): ProvenanceRecord;

  getParent(
    record: ProvenanceRecord,
  ): ProvenanceRecord | undefined;

  getChain(
    record: ProvenanceRecord,
  ): readonly ProvenanceRecord[];

  validateChain(
    records: readonly ProvenanceRecord[],
  ): boolean;
}