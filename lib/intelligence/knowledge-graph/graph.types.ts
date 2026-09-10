export type GraphRelationType =

"related"

|

"depends"

|

"similar"

|

"derived";



export interface KnowledgeNode {


id:string;


label:string;


data:unknown;


createdAt:Date;


}



export interface KnowledgeRelationship {


id:string;


sourceId:string;


targetId:string;


type:GraphRelationType;


createdAt:Date;


}



