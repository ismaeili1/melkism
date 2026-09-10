export interface ReasoningNode {


id:string;


type:string;


value:string;


createdAt:Date;


}



export interface ReasoningPath {


nodes:ReasoningNode[];


depth:number;


confidence:number;


createdAt:Date;


}



export interface InferenceChain {


id:string;


steps:string[];


conclusion:string;


confidence:number;


createdAt:Date;


}



export interface MultiHopContext {


paths:ReasoningPath[];


createdAt:Date;


}

