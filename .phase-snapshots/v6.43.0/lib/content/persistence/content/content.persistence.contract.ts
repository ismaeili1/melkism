/**
 * MELKISM Content Persistence Contract
 *
 * v0.2.5
 *
 * Contract-only persistence boundary for normalized content.
 *
 * No database, Prisma, API, filesystem, or external service
 * implementation belongs in this layer.
 */

import type { NormalizedContent } from "../../adapters/normalization/content.normalizer";

export type ContentPersistenceId = string;

export type ContentPersistenceRecord = NormalizedContent;

export type CreateContentPersistenceInput = Omit<
  NormalizedContent,
  "id"
> & {
  id?: ContentPersistenceId;
};

export type UpdateContentPersistenceInput = Partial<
  Omit<NormalizedContent, "id" | "sourceId">
>;

export interface ContentPersistenceContract {
  create(
    input: CreateContentPersistenceInput,
  ): ContentPersistenceRecord;

  getById(
    id: ContentPersistenceId,
  ): ContentPersistenceRecord | undefined;

  getBySource(
    sourceId: string,
  ): readonly ContentPersistenceRecord[];

  getByLanguage(
    language: string,
  ): readonly ContentPersistenceRecord[];

  getByTag(
    tag: string,
  ): readonly ContentPersistenceRecord[];

  update(
    id: ContentPersistenceId,
    input: UpdateContentPersistenceInput,
  ): ContentPersistenceRecord | undefined;

  delete(
    id: ContentPersistenceId,
  ): boolean;

  exists(
    id: ContentPersistenceId,
  ): boolean;
}
