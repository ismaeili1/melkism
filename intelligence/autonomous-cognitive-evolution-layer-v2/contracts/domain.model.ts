
export interface CognitiveEcosystemState {


id:string;


ecosystemLevel:number;


metaIntelligenceLevel:number;


evolutionLevel:number;


governanceLevel:number;


confidence:number;


timestamp:Date;


}



export interface MetaIntelligenceNode {


nodeId:string;


intelligenceDomain:string;


metaScore:number;


}



export interface CognitiveEvolutionCycle {


cycleId:string;


previousState:string;


currentState:string;


}


