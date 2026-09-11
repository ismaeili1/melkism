export type KnowledgeEntityType =

 | "property"
 | "location"
 | "market"
 | "architecture";


export interface KnowledgeEntity {

id:string;

type:KnowledgeEntityType;

reference:string;

}


