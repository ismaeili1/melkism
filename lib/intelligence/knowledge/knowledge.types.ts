export interface KnowledgeItem {


id:string;


title:string;


content:unknown;


category?:string;


createdAt:string;


}



export interface KnowledgeSource {


id:string;


name:string;


type:string;


reference?:string;


}




/**
 * Knowledge Graph Contracts
 */


export interface KnowledgeNode {


id:string;


type:string;


label:string;


metadata?:unknown;

createdAt?:Date;


}



export interface KnowledgeRelation {


id:string;


from:string;


to:string;


type:string;

weight?:number;


metadata?:unknown;

createdAt?:Date;


}



export interface KnowledgeGraph {


nodes:KnowledgeNode[];


relations:KnowledgeRelation[];

createdAt?:Date;


}





