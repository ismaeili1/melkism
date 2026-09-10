export interface CognitiveNode {

id:string;

type?:string;

metadata?:Record<string,unknown>;

}


export interface CognitiveRelationship {

source:string;

target:string;

type:string;

strength?:number;

}


export interface CognitiveMemory {

id?:string;

content:unknown;

createdAt?:Date;

}

