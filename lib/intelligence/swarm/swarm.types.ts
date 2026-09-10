export type SwarmAgentType =

"market"

|

"property"

|

"investment"

|

"architecture"

|

"urban"

|

"reasoning";



export interface SwarmAgent {


id:string;


name:string;


type:SwarmAgentType;


capability:string[];


active:boolean;


createdAt:Date;


}



export interface AgentMessage {


id:string;


from:string;


to:string;


topic:string;


payload:unknown;


createdAt:Date;


}



export interface SwarmContext {


agents:SwarmAgent[];


messages:AgentMessage[];


createdAt:Date;


}

