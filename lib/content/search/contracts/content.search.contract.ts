/**
 * MELKISM Content Search Contract
 *
 * v0.2.9
 *
 * Defines the search boundary for content.
 *
 * This contract does not select:
 *
 * - search engine
 * - database technology
 * - indexing technology
 * - external service
 *
 * Concrete implementations remain outside
 * this boundary.
 */


export type SearchableContent = {

  id: string;

  title: string;

  language: string;

  tags: string[];

};



export type ContentSearchRequest = {

  query?: string;

  language?: string;

  limit?: number;

};



export type ContentSearchResultItem = {

  id: string;

  title: string;

  language: string;

};



export type ContentSearchResult = {

  items: ContentSearchResultItem[];

  total: number;

};



export interface ContentSearchContract {


  search(
    request: ContentSearchRequest
  ):
  Promise<ContentSearchResult>;


}