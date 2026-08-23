/**
 * MELKISM Content Index Composition
 *
 * v0.3.0
 *
 * Creates the default Content Index dependency graph.
 */

import type {
  ContentIndexContract,
} from "../contracts";

import {
  InMemoryContentIndexAdapter,
} from "../adapters";

import {
  ContentIndexRuntime,
} from "../runtime";


export type ContentIndexDependencies = {
  index: ContentIndexContract;
};


export function createInMemoryContentIndex():
  ContentIndexDependencies {

  return {
    index:
      new InMemoryContentIndexAdapter(),
  };
}


export function createDefaultContentIndex():
  ContentIndexRuntime {

  const dependencies =
    createInMemoryContentIndex();

  return new ContentIndexRuntime(
    dependencies.index,
  );
}