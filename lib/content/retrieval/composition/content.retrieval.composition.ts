/**
 * MELKISM Content Retrieval Composition
 *
 * v0.3.2
 *
 * Creates retrieval dependency graph.
 *
 * This layer selects implementations.
 *
 * Runtime layers depend only on contracts.
 */



import type {
 ContentRetrievalContract,
} from "../contracts";



import type {
 RankingStrategyContract,
} from "../strategies";



import type {
 FilteringPipelineContract,
} from "../filters";



export type ContentRetrievalDependencies = {


 retrieval:
 ContentRetrievalContract;


 ranking?:
 RankingStrategyContract;


 filtering?:
 FilteringPipelineContract;


};



export function createContentRetrievalComposition(

 dependencies:
 ContentRetrievalDependencies

){


 return {

  retrieval:
  dependencies.retrieval,


  ranking:
  dependencies.ranking,


  filtering:
  dependencies.filtering,

 };


}
