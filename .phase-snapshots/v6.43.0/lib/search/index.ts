/**
 * MELKISM v6.26.0
 * Search module public exports.
 */

export {
  searchRepository,
} from "@/lib/search/search.repository";

export {
  searchService,
} from "@/lib/search/search.service";

export type {
  SearchEntity,
  SearchInput,
  SearchResponse,
  SearchResult,
} from "@/lib/search/search.types";

export {
  parseSearchEntities,
  parseSearchInput,
} from "@/lib/search/search.types";