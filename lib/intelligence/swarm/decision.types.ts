export type CollectiveDecisionStatus =

"approved"

|

"pending"

|

"rejected";



export interface CollectiveDecision {


id:string;


subject:string;


agents:string[];


decision:string;


confidence:number;


status:CollectiveDecisionStatus;


createdAt:Date;


}



export interface SwarmDecisionContext {


decisions:CollectiveDecision[];


createdAt:Date;


}



export interface SwarmDecisionOutput {


decision:string;


confidence:number;


sourceCount:number;


createdAt:Date;


}

