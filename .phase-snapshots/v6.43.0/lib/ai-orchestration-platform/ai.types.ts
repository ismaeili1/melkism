export type AIAgentType =
 | "property"
 | "architecture"
 | "knowledge"
 | "market"
 | "content";


export interface AIAgent {

id:string;

type:AIAgentType;

name:string;

active:boolean;

}


export interface AIContext {

query:string;

sources:string[];

}


