export type DecisionStatus =

 | "approved"
 | "review"
 | "blocked";


export interface DecisionRequest {

id:string;

context:string;

}


export interface DecisionResult {

status:DecisionStatus;

confidence:number;

reason:string;

}

