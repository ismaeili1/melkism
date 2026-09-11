/**
 * MELKISM In-Memory Content Repository
 *
 * v0.2.5
 *
 * Test/runtime implementation of ContentPersistenceContract.
 *
 * No database or external persistence is used.
 */

import type {
  ContentPersistenceContract,
  ContentPersistenceId,
  ContentPersistenceRecord,
  CreateContentPersistenceInput,
  UpdateContentPersistenceInput,
} from "../content";

export class InMemoryContentRepository
  implements ContentPersistenceContract
{
  private readonly records = new Map<
    ContentPersistenceId,
    ContentPersistenceRecord
  >();

  create(
    input: CreateContentPersistenceInput,
  ): ContentPersistenceRecord {
    const id =
      input.id ??
      this.createId();

    const record: ContentPersistenceRecord = {
      ...input,
      id,
    };

    this.records.set(id, record);

    return record;
  }

  getById(
    id: ContentPersistenceId,
  ): ContentPersistenceRecord | undefined {
    return this.records.get(id);
  }

  getBySource(
    sourceId: string,
  ): readonly ContentPersistenceRecord[] {
    return [...this.records.values()].filter(
      (record) => record.sourceId === sourceId,
    );
  }

  getByLanguage(
    language: string,
  ): readonly ContentPersistenceRecord[] {
    return [...this.records.values()].filter(
      (record) => record.language === language,
    );
  }

  getByTag(
    tag: string,
  ): readonly ContentPersistenceRecord[] {
    return [...this.records.values()].filter(
      (record) => record.tags.includes(tag),
    );
  }

  update(
    id: ContentPersistenceId,
    input: UpdateContentPersistenceInput,
  ): ContentPersistenceRecord | undefined {
    const existing = this.records.get(id);

    if (!existing) {
      return undefined;
    }

    const updated: ContentPersistenceRecord = {
      ...existing,
      ...input,
      id: existing.id,
      sourceId: existing.sourceId,
    };

    this.records.set(id, updated);

    return updated;
  }

  delete(
    id: ContentPersistenceId,
  ): boolean {
    return this.records.delete(id);
  }

  exists(
    id: ContentPersistenceId,
  ): boolean {
    return this.records.has(id);
  }

  private createId(): ContentPersistenceId {
    return `content_${Date.now()}_${Math.random()
      .toString(36)
      .slice(2, 10)}`;
  }
}
