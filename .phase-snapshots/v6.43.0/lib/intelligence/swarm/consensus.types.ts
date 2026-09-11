export type OpinionType =

"approve"

|

"reject"

|

"neutral";



export interface AgentOpinion {


id:string;


agentId:string;


subject:string;


type:OpinionType;


score:number;


createdAt:Date;


}



export interface ConsensusContext {


subject:string;


opinions:AgentOpinion[];


createdAt:Date;


}



export interface ConsensusResult {


subject:string;


agreement:number;


decision:OpinionType;


confidence:number;


createdAt:Date;


}

