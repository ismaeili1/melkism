/**
 * MELKISM Content Indexing
 *
 * v0.3.0
 */

export type {
  ContentIndexEntry,
  ContentIndexContract,
} from "./contracts";

export {
  InMemoryContentIndexAdapter,
} from "./adapters";

export {
  ContentIndexRuntime,
} from "./runtime";

export {
  createInMemoryContentIndex,
  createDefaultContentIndex,
} from "./composition";

export type {
  ContentIndexDependencies,
} from "./composition";