export type DecisionType =
 | "property"
 | "investment"
 | "market";


export interface DecisionRequest {

id:string;

type:DecisionType;

input:string;

}


export interface DecisionResult {

score:number;

confidence:number;

risk:number;

}

