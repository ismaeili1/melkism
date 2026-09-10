export type GraphNodeType =
 | "property"
 | "city"
 | "architect"
 | "project"
 | "market"
 | "investment"
 | "document";


export interface GraphNode {

id:string;

type:GraphNodeType;

label:string;

}



export interface GraphEdge {

source:string;

target:string;

relation:string;

}



export interface GraphQueryResult {

nodes:GraphNode[];

edges:GraphEdge[];

}

