/**
 * MELKISM Content Storage Composition
 *
 * v0.2.7
 *
 * Creates the default content storage dependency graph.
 *
 * This layer selects concrete storage adapters.
 *
 * Runtime layers depend only on contracts.
 *
 * No database technology is introduced here.
 */


import type {
  ContentStorageContract,
} from "../content.storage.contract";


import {
  InMemoryContentStorageAdapter,
} from "../adapters";


export type ContentStorageDependencies = {
  contentStorage: ContentStorageContract;
};


export function createInMemoryContentStorage():
ContentStorageDependencies {

  return {
    contentStorage:
      new InMemoryContentStorageAdapter(),
  };
}


export function createDefaultContentStorage():
ContentStorageDependencies {

  return createInMemoryContentStorage();

}
