export type RetrievalSource =
 | "knowledge"
 | "graph"
 | "semantic"
 | "market"
 | "document";


export interface RetrievalRequest {

query:string;

sources:RetrievalSource[];

}


export interface RetrievalContext {

query:string;

items:unknown[];

score:number;

}

