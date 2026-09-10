
export interface MetaIntelligenceState {


id:string;


metaLevel:number;


orchestrationLevel:number;


cognitionLevel:number;


governanceLevel:number;


confidence:number;


timestamp:Date;


}



export interface MetaCognitionNode {


nodeId:string;


domain:string;


metaScore:number;


}



export interface MetaEvolutionCycle {


cycleId:string;


previousState:string;


currentState:string;


}


