export type ConflictStatus =

"detected"

|

"resolved"

|

"rejected";



export interface DecisionCandidate {


id:string;


agentId:string;


decision:string;


confidence:number;


priority:number;


createdAt:Date;


}



export interface AgentConflict {


id:string;


topic:string;


candidates:DecisionCandidate[];


status:ConflictStatus;


createdAt:Date;


}



export interface ConflictResolutionResult {


conflictId:string;


selectedDecision:string;


selectedAgent:string;


confidence:number;


resolvedAt:Date;


}

