
export interface AutonomousIntelligenceState {


id:string;


memoryLevel:number;


reasoningLevel:number;


decisionLevel:number;


confidence:number;


timestamp:Date;


}



export interface IntelligenceSignal {


source:string;


type:string;


value:number;


weight:number;


}



