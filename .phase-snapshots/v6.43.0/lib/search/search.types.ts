/**
 * MELKISM v6.26.0
 * Search and Discovery backend types.
 */

import {
  requirePositiveInteger,
  requireString,
} from "@/lib/api/core/validation";

import {
  badRequest,
} from "@/lib/api/core/errors";

export type SearchEntity =
  | "content"
  | "source"
  | "taxonomy"
  | "knowledge"
  | "intelligence";

export type SearchResult = {
  id: string;
  entity: SearchEntity;
  title: string;
  subtitle?: string | null;
  slug?: string | null;
  score: number;
  updatedAt: string;
  metadata?: Record<string, unknown>;
};

export type SearchInput = {
  query: string;
  page: number;
  pageSize: number;
  entities: SearchEntity[];
};

export type SearchResponse = {
  query: string;
  page: number;
  pageSize: number;
  total: number;
  results: SearchResult[];
};

const SEARCH_ENTITIES: SearchEntity[] = [
  "content",
  "source",
  "taxonomy",
  "knowledge",
  "intelligence",
];

export function parseSearchEntities(
  value: string | null
): SearchEntity[] {

  if (
    value === null ||
    value.trim().length === 0
  ) {
    return SEARCH_ENTITIES;
  }

  const values =
    value
      .split(",")
      .map(
        (item) =>
          item.trim().toLowerCase()
      )
      .filter(Boolean);

  const invalid =
    values.find(
      (item) =>
        !SEARCH_ENTITIES.includes(
          item as SearchEntity
        )
    );

  if (invalid) {
    throw badRequest(
      `Invalid search entity: ${invalid}.`
    );
  }

  return Array.from(
    new Set(
      values as SearchEntity[]
    )
  );
}

export function parseSearchInput(
  url: URL
): SearchInput {

  const rawQuery =
    url.searchParams.get("q");

  if (
    rawQuery === null ||
    rawQuery.trim().length < 2
  ) {
    throw badRequest(
      "Search query must contain at least 2 characters."
    );
  }

  const query =
    requireString(
      rawQuery,
      "q"
    );

  if (query.length > 200) {
    throw badRequest(
      "Search query must not exceed 200 characters."
    );
  }

  const rawPage =
    url.searchParams.get("page");

  const rawPageSize =
    url.searchParams.get("pageSize");

  const page =
    rawPage === null
      ? 1
      : requirePositiveInteger(
          rawPage,
          "page"
        );

  const pageSize =
    rawPageSize === null
      ? 20
      : requirePositiveInteger(
          rawPageSize,
          "pageSize"
        );

  if (pageSize > 50) {
    throw badRequest(
      "pageSize must not exceed 50."
    );
  }

  return {
    query,
    page,
    pageSize,
    entities:
      parseSearchEntities(
        url.searchParams.get(
          "entities"
        )
      ),
  };
}