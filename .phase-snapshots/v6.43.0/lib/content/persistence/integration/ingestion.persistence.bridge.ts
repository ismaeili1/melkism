/**
 * MELKISM Ingestion Persistence Bridge
 *
 * v0.2.5
 *
 * Bridges a completed ingestion result into the
 * persistence repository layer.
 *
 * This bridge does not execute ingestion.
 * It does not fetch sources.
 * It does not normalize content.
 * It does not create provenance.
 *
 * Its only responsibility is persistence of a
 * completed ingestion result.
 *
 * No Prisma, database, HTTP, filesystem, or
 * external persistence technology is used.
 */

import type {
  PersistenceRuntimeDependencies,
} from "./persistence.runtime.dependencies";

import type {
  ProvenanceStage,
} from "../../provenance/provenance.types";

export type PersistableIngestionResult = {
  sourceId: string;
  stage: string;
  fetchedAt?: string;
  normalizedAt?: string;
  content?: {
    id: string;
    sourceId: string;
    title: string;
    description?: string;
    content: string;
    language: string;
    tags: string[];
    publishedAt?: string;
  };
  provenance?: {
    id: string;
    sourceId: string;
    stage: ProvenanceStage;
    observedAt: string;
    fetchedAt?: string;
    normalizedAt?: string;
    contentHash?: string;
    adapterName?: string;
    adapterVersion?: string;
    normalizationVersion?: string;
    locale?: string;
    parentId?: string;
    metadata?: Record<
      string,
      string | number | boolean | null
    >;
  };
  provenanceId?: string;
  errors?: readonly string[];
};

export type IngestionPersistenceBridgeResult = {
  persisted: boolean;
  sourceId: string;
  contentId?: string;
  ingestionId?: string;
  provenanceId?: string;
};

export class IngestionPersistenceBridge {
  constructor(
    private readonly dependencies:
      PersistenceRuntimeDependencies,
  ) {}

  persist(
    result: PersistableIngestionResult,
  ): IngestionPersistenceBridgeResult {
    if (result.stage !== "completed") {
      return {
        persisted: false,
        sourceId: result.sourceId,
      };
    }

    if (!result.content) {
      throw new Error(
        "Cannot persist completed ingestion without content.",
      );
    }

    const content =
      this.dependencies.content.create({
        ...result.content,
        metadata: {},
      });

    let provenance:
      | ReturnType<
          PersistenceRuntimeDependencies[
            "provenance"
          ]["create"]
        >
      | undefined;

    if (result.provenance) {
      provenance =
        this.dependencies.provenance.create({
          ...result.provenance,
        });
    }

    const ingestion =
      this.dependencies.ingestion.create({
        sourceId: result.sourceId,
        content,
        provenance,
        provenanceId:
          provenance?.id ??
          result.provenanceId,
      });

    return {
      persisted: true,
      sourceId: result.sourceId,
      contentId: content.id,
      ingestionId: ingestion.id,
      provenanceId:
        provenance?.id ??
        result.provenanceId,
    };
  }
}
