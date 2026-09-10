
export interface CognitiveCapability {

id:string;

name:string;

level:number;

}



export interface CognitiveDecision {

id:string;

decision:string;

confidence:number;

createdAt:Date;

}



export interface CognitiveMemory {

id:string;

pattern:string;

weight:number;

}



