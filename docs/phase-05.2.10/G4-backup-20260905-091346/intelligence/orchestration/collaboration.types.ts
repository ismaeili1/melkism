export type AgentRole =

"leader"

|

"analyst"

|

"executor"

|

"reviewer";



export interface AgentAssignment {


id:string;


agentId:string;


role:AgentRole;


task:string;


createdAt:Date;


}



export interface CollaborationPlan {


id:string;


assignments:AgentAssignment[];


createdAt:Date;


}

