/**
 * MELKISM v6.26.0
 * Search and Discovery application service.
 */

import {
  searchRepository,
} from "@/lib/search/search.repository";

import type {
  SearchInput,
  SearchResponse,
  SearchResult,
} from "@/lib/search/search.types";

function compareResults(
  a: SearchResult,
  b: SearchResult
): number {

  if (
    b.score !==
    a.score
  ) {
    return (
      b.score -
      a.score
    );
  }

  return (
    new Date(
      b.updatedAt
    ).getTime() -
    new Date(
      a.updatedAt
    ).getTime()
  );
}

function deduplicate(
  results: SearchResult[]
): SearchResult[] {

  const seen =
    new Set<string>();

  const output:
    SearchResult[] = [];

  for (
    const result
    of results
  ) {

    const key =
      `${result.entity}:${result.id}`;

    if (
      seen.has(key)
    ) {
      continue;
    }

    seen.add(key);
    output.push(result);
  }

  return output;
}

export const searchService = {

  async search(
    input: SearchInput
  ): Promise<SearchResponse> {

    const rawResults =
      await searchRepository.search(
        input
      );

    const normalized =
      deduplicate(
        rawResults
      ).sort(
        compareResults
      );

    const total =
      normalized.length;

    const start =
      (input.page - 1) *
      input.pageSize;

    const end =
      start +
      input.pageSize;

    return {
      query:
        input.query,
      page:
        input.page,
      pageSize:
        input.pageSize,
      total,
      results:
        normalized.slice(
          start,
          end
        ),
    };
  },
};