/**
 * MELKISM Content Retrieval Runtime
 *
 * v0.3.2
 *
 * Coordinates retrieval execution.
 *
 * This runtime does not know:
 *
 * - database
 * - search engine
 * - ranking algorithm
 * - AI model
 *
 * It only orchestrates retrieval flow.
 */


import type {
  ContentRetrievalContract,
  ContentRetrievalRequest,
  ContentRetrievalResult,
} from "../contracts";



export class ContentRetrievalRuntime
implements ContentRetrievalContract {


 constructor(
  private readonly executor:
  ContentRetrievalContract
 ){}



 async retrieve(
  request:
  ContentRetrievalRequest
 ):
 Promise<ContentRetrievalResult>{


  return this.executor.retrieve(
    request
  );


 }


}
