export type KnowledgeEntityType =
 | "property"
 | "city"
 | "country"
 | "building"
 | "architect"
 | "article"
 | "report"
 | "market-entity";


export interface KnowledgeEntity {

id:string;

type:KnowledgeEntityType;

name:string;

}



export interface KnowledgeRelation {

from:string;

to:string;

relation:string;

}



