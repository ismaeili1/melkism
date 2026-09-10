export type KnowledgeNodeType =

"market"

|

"property"

|

"user"

|

"memory"

|

"decision"

|

"entity";



export type KnowledgeRelationType =

"connected"

|

"influences"

|

"derived_from"

|

"related_to";



export interface KnowledgeNode {


id:string;


type:KnowledgeNodeType;


label:string;


metadata?:Record<string,unknown>;


createdAt:Date;


}



export interface KnowledgeRelation {


id:string;


from:string;


to:string;


type:KnowledgeRelationType;


weight:number;


createdAt:Date;


}



export interface KnowledgeGraph {


nodes:KnowledgeNode[];


relations:KnowledgeRelation[];


createdAt:Date;


}

