export type AgentStatus =

"active"

|

"inactive";



export interface IntelligenceAgent {


id:string;


name:string;


capabilities:string[];


status:AgentStatus;


createdAt:Date;


}



