
export interface NetworkIntelligenceState {


id:string;


nodes:string[];


awarenessLevel:number;


contextLevel:number;


reasoningLevel:number;


governanceLevel:number;


confidence:number;


timestamp:Date;


}



export interface SharedContext {


source:string;


target:string;


content:string;


}


