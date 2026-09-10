export type KnowledgeEntityType =
 | "property"
 | "building"
 | "architect"
 | "city"
 | "country"
 | "material"
 | "concept"
 | "article";


export interface KnowledgeEntity {

id:string;

type:KnowledgeEntityType;

name:string;

}


export interface KnowledgeRelation {

id:string;

from:string;

to:string;

type:string;

}


