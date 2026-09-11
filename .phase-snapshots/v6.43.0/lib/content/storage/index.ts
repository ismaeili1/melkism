/**
 * MELKISM Content Storage Exports
 *
 * v0.2.7
 */


export type {
  StoredContent,
  CreateStoredContentInput,
  UpdateStoredContentInput,
  ContentStorageContract,
} from "./content.storage.contract";

export { ContentStorageRuntime } from './content.storage.runtime';

export { InMemoryContentStorageAdapter } from './adapters';


export {
  createInMemoryContentStorage,
  createDefaultContentStorage,
} from "./composition";

export type {
  ContentStorageDependencies,
} from "./composition";


export {
  ContentRuntimeStorage,
} from "../runtime/content.storage.runtime";
