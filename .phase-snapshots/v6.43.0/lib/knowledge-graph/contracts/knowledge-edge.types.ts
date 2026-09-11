/**
 * MELKISM v6.41.0
 * Semantic Knowledge Edge Contract
 */

export type KnowledgeRelationType =
 | "related_to"
 | "contains"
 | "derived_from"
 | "supports"
 | "contradicts";


export interface KnowledgeEdge {

 id:string;

 source:string;

 target:string;

 relation:KnowledgeRelationType;

 confidence:number;

}
