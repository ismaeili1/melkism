export type KnowledgeQueryMode =
  | "semantic"
  | "graph"
  | "hybrid";


export interface KnowledgeQuery {

  entity?: string;

  relation?: string;

  mode: KnowledgeQueryMode;

  limit?: number;

}
