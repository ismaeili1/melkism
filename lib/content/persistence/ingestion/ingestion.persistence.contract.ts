/**
 * MELKISM Ingestion Persistence Contract
 *
 * v0.2.5
 *
 * Contract-only persistence boundary.
 *
 * This layer defines how completed ingestion results may be
 * persisted without coupling the ingestion runtime to:
 *
 * - Prisma
 * - PostgreSQL
 * - external databases
 * - HTTP APIs
 * - filesystem persistence
 *
 * Runtime and persistence implementations remain separate.
 */

import type { NormalizedContent } from "../../adapters/normalization/content.normalizer";
import type { ProvenanceRecord } from "../../provenance/provenance.types";

export type IngestionPersistenceId = string;

export type IngestionPersistenceRecord = {
  id: IngestionPersistenceId;

  sourceId: string;

  content: NormalizedContent;

  provenance?: ProvenanceRecord;

  provenanceId?: string;

  persistedAt: string;

  metadata?: Record<
    string,
    string | number | boolean | null
  >;
};

export type CreateIngestionPersistenceInput = {
  sourceId: string;

  content: NormalizedContent;

  provenance?: ProvenanceRecord;

  provenanceId?: string;

  persistedAt?: string;

  metadata?: Record<
    string,
    string | number | boolean | null
  >;
};

export type UpdateIngestionPersistenceInput = {
  content?: NormalizedContent;

  provenance?: ProvenanceRecord;

  provenanceId?: string;

  metadata?: Record<
    string,
    string | number | boolean | null
  >;
};

export interface IngestionPersistenceContract {
  create(
    input: CreateIngestionPersistenceInput,
  ): IngestionPersistenceRecord;

  getById(
    id: IngestionPersistenceId,
  ): IngestionPersistenceRecord | undefined;

  getBySource(
    sourceId: string,
  ): readonly IngestionPersistenceRecord[];

  getByContentId(
    contentId: string,
  ): IngestionPersistenceRecord | undefined;

  update(
    id: IngestionPersistenceId,
    input: UpdateIngestionPersistenceInput,
  ): IngestionPersistenceRecord | undefined;

  delete(
    id: IngestionPersistenceId,
  ): boolean;

  exists(
    id: IngestionPersistenceId,
  ): boolean;
}
