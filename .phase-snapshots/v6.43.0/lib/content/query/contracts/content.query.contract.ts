/**
 * MELKISM Content Query Contract
 *
 * v0.2.8
 *
 * Defines query boundaries for content retrieval.
 *
 * This layer does not access storage directly.
 * It defines contracts only.
 *
 * No database.
 * No search engine.
 * No API.
 */


export type ContentQuerySortDirection =
  | "asc"
  | "desc";


export type ContentQuerySortField =
  | "createdAt"
  | "updatedAt"
  | "publishedAt";


export type ContentQueryPagination = {
  limit: number;
  offset: number;
};


export type ContentQueryFilter = {
  sourceId?: string;
  language?: string;
  tags?: readonly string[];
};


export type ContentQuerySort = {
  field: ContentQuerySortField;
  direction: ContentQuerySortDirection;
};


export type ContentQueryRequest = {

  filter?: ContentQueryFilter;

  sort?: ContentQuerySort;

  pagination?: ContentQueryPagination;

};



export type ContentQueryItem = {

  id: string;

  title: string;

  language: string;

};



export type ContentQueryResult = {

  items: readonly ContentQueryItem[];

  total: number;

};

