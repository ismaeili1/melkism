/**
 * MELKISM Provenance Persistence Contract
 *
 * v0.2.5
 *
 * Contract-only persistence boundary for provenance records.
 *
 * No database, Prisma, API, filesystem, or external service
 * implementation belongs in this layer.
 */

import type {
  ProvenanceId,
  ProvenanceRecord,
  ProvenanceStage,
} from "../../provenance/provenance.types";

export type ProvenancePersistenceRecord = ProvenanceRecord;

export type CreateProvenancePersistenceInput = Omit<
  ProvenanceRecord,
  "id"
> & {
  id?: ProvenanceId;
};

export type UpdateProvenancePersistenceInput = Partial<
  Omit<ProvenanceRecord, "id" | "sourceId">
>;

export interface ProvenancePersistenceContract {
  create(
    input: CreateProvenancePersistenceInput,
  ): ProvenancePersistenceRecord;

  getById(
    id: ProvenanceId,
  ): ProvenancePersistenceRecord | undefined;

  getBySource(
    sourceId: string,
  ): readonly ProvenancePersistenceRecord[];

  getByStage(
    stage: ProvenanceStage,
  ): readonly ProvenancePersistenceRecord[];

  getChildren(
    parentId: ProvenanceId,
  ): readonly ProvenancePersistenceRecord[];

  update(
    id: ProvenanceId,
    input: UpdateProvenancePersistenceInput,
  ): ProvenancePersistenceRecord | undefined;

  delete(
    id: ProvenanceId,
  ): boolean;

  exists(
    id: ProvenanceId,
  ): boolean;
}
