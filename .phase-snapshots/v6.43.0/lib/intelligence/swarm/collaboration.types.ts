export type CollaborationStatus =

"created"

|

"running"

|

"completed"

|

"failed";



export interface AgentTask {


id:string;


title:string;


description:string;


assignedAgent:string;


priority:number;


createdAt:Date;


}



export interface CollaborationSession {


id:string;


taskIds:string[];


agentIds:string[];


status:CollaborationStatus;


createdAt:Date;


}



export interface CollaborationResult {


sessionId:string;


outputs:string[];


confidence:number;


createdAt:Date;


}

