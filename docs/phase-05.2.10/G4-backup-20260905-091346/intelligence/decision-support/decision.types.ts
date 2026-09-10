export type DecisionType =

"recommendation"

|

"warning"

|

"opportunity"

|

"analysis";



export type DecisionPriority =

"low"

|

"medium"

|

"high"

|

"critical";



export interface DecisionContext {


id:string;


domain:string;


entityId?:string;


input:unknown;


createdAt:Date;


}



export interface IntelligenceDecision {


id:string;


type:DecisionType;


priority:DecisionPriority;


summary:string;


confidence:number;


createdAt:Date;


}



export interface DecisionRecommendation {


decisionId:string;


recommendation:string;


reason:string;


confidence:number;


createdAt:Date;


}

