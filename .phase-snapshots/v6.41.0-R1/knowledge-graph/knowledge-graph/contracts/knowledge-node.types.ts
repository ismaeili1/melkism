/**
 * MELKISM v6.41.0
 * Semantic Knowledge Node Contract
 */

export type KnowledgeNodeType =
 | "concept"
 | "entity"
 | "document"
 | "location"
 | "technology"
 | "agent"
 | "event";


export interface KnowledgeNode {

 id:string;

 type:KnowledgeNodeType;

 label:string;

 metadata:
 Record<string,unknown>;

 createdAt:string;

}
