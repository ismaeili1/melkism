/**
 * MELKISM In-Memory Ingestion Repository
 *
 * v0.2.5
 *
 * Test/runtime implementation of IngestionPersistenceContract.
 *
 * No database or external persistence is used.
 */

import type {
  IngestionPersistenceContract,
  IngestionPersistenceId,
  IngestionPersistenceRecord,
  CreateIngestionPersistenceInput,
  UpdateIngestionPersistenceInput,
} from "../ingestion";

export class InMemoryIngestionRepository
  implements IngestionPersistenceContract
{
  private readonly records = new Map<
    IngestionPersistenceId,
    IngestionPersistenceRecord
  >();

  create(
    input: CreateIngestionPersistenceInput,
  ): IngestionPersistenceRecord {
    const id = this.createId();

    const record: IngestionPersistenceRecord = {
      ...input,
      id,
      persistedAt:
        input.persistedAt ??
        new Date().toISOString(),
    };

    this.records.set(id, record);

    return record;
  }

  getById(
    id: IngestionPersistenceId,
  ): IngestionPersistenceRecord | undefined {
    return this.records.get(id);
  }

  getBySource(
    sourceId: string,
  ): readonly IngestionPersistenceRecord[] {
    return [...this.records.values()].filter(
      (record) => record.sourceId === sourceId,
    );
  }

  getByContentId(
    contentId: string,
  ): IngestionPersistenceRecord | undefined {
    return [...this.records.values()].find(
      (record) => record.content.id === contentId,
    );
  }

  update(
    id: IngestionPersistenceId,
    input: UpdateIngestionPersistenceInput,
  ): IngestionPersistenceRecord | undefined {
    const existing = this.records.get(id);

    if (!existing) {
      return undefined;
    }

    const updated: IngestionPersistenceRecord = {
      ...existing,
      ...input,
      id: existing.id,
      sourceId: existing.sourceId,
    };

    this.records.set(id, updated);

    return updated;
  }

  delete(
    id: IngestionPersistenceId,
  ): boolean {
    return this.records.delete(id);
  }

  exists(
    id: IngestionPersistenceId,
  ): boolean {
    return this.records.has(id);
  }

  private createId(): IngestionPersistenceId {
    return `ingestion_${Date.now()}_${Math.random()
      .toString(36)
      .slice(2, 10)}`;
  }
}
