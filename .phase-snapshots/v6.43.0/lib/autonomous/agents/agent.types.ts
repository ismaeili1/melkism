export type AgentStatus =

"idle"

|

"assigned"

|

"working"

|

"completed";



export interface IntelligenceAgent {


id:string;


name:string;


status:AgentStatus;


capabilities:string[];


createdAt:Date;


}



