export type AgentCapability =

"analysis"

|

"prediction"

|

"research"

|

"optimization"

|

"reasoning";



export interface AgentProfile {


id:string;


name:string;


capabilities:AgentCapability[];


description:string;


createdAt:Date;


}



export interface AgentRegistry {


agents:AgentProfile[];


createdAt:Date;


}

