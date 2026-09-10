
export interface MetaEvolutionState {


id:string;


evolutionLevel:number;


optimizationLevel:number;


improvementLevel:number;


governanceLevel:number;


confidence:number;


timestamp:Date;


}



export interface IntelligenceEvolutionCycle {


cycleId:string;


previousState:string;


newState:string;


}



export interface SelfImprovementSignal {


signalId:string;


source:string;


impact:number;


}


