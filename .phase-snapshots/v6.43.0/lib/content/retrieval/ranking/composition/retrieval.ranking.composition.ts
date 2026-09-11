/**
 * MELKISM Retrieval Ranking Composition
 *
 * v0.5.3
 */

import {
  DeterministicRankingRuntime,
} from '../runtime';


export type RetrievalRankingCompositionDependencies = {

  ranking?:
    DeterministicRankingRuntime;

};


export function createRetrievalRankingRuntime(
  dependencies:
    RetrievalRankingCompositionDependencies = {}
):
  DeterministicRankingRuntime {

  return (
    dependencies.ranking ??
    new DeterministicRankingRuntime()
  );
}


export function createDefaultRetrievalRankingRuntime():
  DeterministicRankingRuntime {

  return new DeterministicRankingRuntime();
}
