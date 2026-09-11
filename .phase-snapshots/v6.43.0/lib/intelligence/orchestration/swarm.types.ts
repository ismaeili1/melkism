export type SwarmDecisionType =

"consensus"

|

"majority"

|

"weighted";



export interface SwarmAgentOpinion {


agentId:string;


decision:string;


confidence:number;


weight:number;


createdAt:Date;


}



export interface SwarmDecision {


id:string;


type:SwarmDecisionType;


decision:string;


confidence:number;


opinions:SwarmAgentOpinion[];


createdAt:Date;


}



export interface SwarmResult {


decision:SwarmDecision;


agents:number;


createdAt:Date;


}

