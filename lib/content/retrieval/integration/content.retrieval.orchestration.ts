/**
 * MELKISM Retrieval Orchestration
 *
 * v0.3.2
 *
 * Coordinates:
 *
 * - Search
 * - Index
 * - Filtering
 * - Ranking
 *
 * This layer does not know
 * concrete implementations.
 */



import type {
 ContentRetrievalRequest,
 ContentRetrievalResult,
} from "../contracts";



export interface ContentSearchProvider {


 search(
  request:
  ContentRetrievalRequest

 ):
 Promise<ContentRetrievalResult>;


}



export interface ContentIndexProvider {


 index(
  request:
  ContentRetrievalRequest

 ):
 Promise<void>;


}



export type RetrievalOrchestrationDependencies = {


 search:
 ContentSearchProvider;


 index:
 ContentIndexProvider;


};



export class ContentRetrievalOrchestrator {


 constructor(

  private readonly dependencies:
  RetrievalOrchestrationDependencies

 ){}



 async execute(

  request:
  ContentRetrievalRequest

 ):


 Promise<ContentRetrievalResult>{


  await this.dependencies.index.index(
    request
  );


  return this.dependencies.search.search(
    request
  );


 }


}
