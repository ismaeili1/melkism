
export type IntelligenceAgentStatus =
"idle"
|
"thinking"
|
"executing"
|
"completed"
|
"paused";



export interface IntelligenceAgent {


id:string;


name:string;


role:string;


status:IntelligenceAgentStatus;


capabilities:string[];


createdAt:Date;


}

