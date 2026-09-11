export type AgentType =

"analysis"

|

"recommendation"

|

"optimization"

|

"research";



export type AgentStatus =

"idle"

|

"thinking"

|

"executing"

|

"completed";



export interface IntelligenceAgent {


id:string;


name:string;


type:AgentType;


status:AgentStatus;


createdAt:Date;


}



export interface AgentContext {


agentId:string;


domain:string;


entityId?:string;


input:unknown;


createdAt:Date;


}

