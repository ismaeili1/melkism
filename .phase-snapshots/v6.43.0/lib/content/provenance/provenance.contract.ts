/**
 * MELKISM Provenance Pipeline Contract
 *
 * v0.2.3
 *
 * Contract-only layer.
 * No persistence, database, API, or external source access is performed here.
 */

import type { ProvenanceChainContract } from "./provenance.chain";
import type {
  ProvenanceId,
  ProvenanceRecord,
  ProvenanceStage,
} from "./provenance.types";

export type CreateProvenanceInput = {
  sourceId: string;
  sourceUrl?: string;
  sourceVersion?: string;

  stage: ProvenanceStage;

  observedAt?: string;
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

export interface ProvenancePipelineContract {
  readonly chain: ProvenanceChainContract;
  create(input: CreateProvenanceInput): ProvenanceRecord;

  getById(id: ProvenanceId): ProvenanceRecord | undefined;

  getBySource(sourceId: string): readonly ProvenanceRecord[];

  getByStage(stage: ProvenanceStage): readonly ProvenanceRecord[];
}