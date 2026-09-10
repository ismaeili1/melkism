
export interface IntelligenceDecision {


id:string;


decision:string;


confidence:number;


reason:string;


createdAt:Date;


}



export interface IntelligenceMemory {


id:string;


pattern:string;


weight:number;


}



export interface IntelligenceCapability {


version:string;


capability:string;


level:number;


}



