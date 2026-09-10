export type GovernanceStatus =

"approved"

|

"review"

|

"rejected";



export interface DecisionRule {


id:string;


name:string;


minimumConfidence:number;


createdAt:Date;


}



export interface GovernedDecision {


decisionId:string;


status:GovernanceStatus;


confidence:number;


reason:string;


createdAt:Date;


}

