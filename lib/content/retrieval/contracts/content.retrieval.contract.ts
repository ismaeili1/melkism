/**
 * MELKISM Content Retrieval Contract
 *
 * v0.3.2
 *
 * Defines the retrieval boundary.
 *
 * This contract does not know:
 *
 * - database
 * - search engine
 * - index implementation
 * - AI model
 *
 * Retrieval coordinates selection
 * of content results.
 */



export type ContentRetrievalRequest = {

  query: string;

  language?: string;

  contentType?: string;

  sourceId?: string;

  limit?: number;

};



export type ContentRetrievalItem = {

  id: string;

  title: string;

  language: string;

  score?: number;

  metadata?:
  Record<string, unknown>;

};



export type ContentRetrievalResult = {

  items:
  readonly ContentRetrievalItem[];

  total: number;

};




export interface ContentRetrievalContract {


  retrieve(
    request:
    ContentRetrievalRequest
  ):
  Promise<ContentRetrievalResult>;


}
