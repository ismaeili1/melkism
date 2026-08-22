/**
 * MELKISM In-Memory Provenance Repository
 *
 * v0.2.5
 *
 * Test/runtime implementation of ProvenancePersistenceContract.
 *
 * No database or external persistence is used.
 */

import type {
  ProvenancePersistenceContract,
  ProvenancePersistenceRecord,
  CreateProvenancePersistenceInput,
  UpdateProvenancePersistenceInput,
} from "../provenance";

import type {
  ProvenanceId,
  ProvenanceStage,
} from "../../provenance/provenance.types";

export class InMemoryProvenanceRepository
  implements ProvenancePersistenceContract
{
  private readonly records = new Map<
    ProvenanceId,
    ProvenancePersistenceRecord
  >();

  create(
    input: CreateProvenancePersistenceInput,
  ): ProvenancePersistenceRecord {
    const id =
      input.id ??
      this.createId();

    const record: ProvenancePersistenceRecord = {
      ...input,
      id,
    };

    this.records.set(id, record);

    return record;
  }

  getById(
    id: ProvenanceId,
  ): ProvenancePersistenceRecord | undefined {
    return this.records.get(id);
  }

  getBySource(
    sourceId: string,
  ): readonly ProvenancePersistenceRecord[] {
    return [...this.records.values()].filter(
      (record) => record.sourceId === sourceId,
    );
  }

  getByStage(
    stage: ProvenanceStage,
  ): readonly ProvenancePersistenceRecord[] {
    return [...this.records.values()].filter(
      (record) => record.stage === stage,
    );
  }

  getChildren(
    parentId: ProvenanceId,
  ): readonly ProvenancePersistenceRecord[] {
    return [...this.records.values()].filter(
      (record) => record.parentId === parentId,
    );
  }

  update(
    id: ProvenanceId,
    input: UpdateProvenancePersistenceInput,
  ): ProvenancePersistenceRecord | undefined {
    const existing = this.records.get(id);

    if (!existing) {
      return undefined;
    }

    const updated: ProvenancePersistenceRecord = {
      ...existing,
      ...input,
      id: existing.id,
      sourceId: existing.sourceId,
    };

    this.records.set(id, updated);

    return updated;
  }

  delete(
    id: ProvenanceId,
  ): boolean {
    return this.records.delete(id);
  }

  exists(
    id: ProvenanceId,
  ): boolean {
    return this.records.has(id);
  }

  private createId(): ProvenanceId {
    return `prov_${Date.now()}_${Math.random()
      .toString(36)
      .slice(2, 10)}`;
  }
}
