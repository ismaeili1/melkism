
export interface GlobalEcosystemState {


id:string;


ecosystemLevel:number;


orchestrationLevel:number;


evolutionLevel:number;


governanceLevel:number;


confidence:number;


timestamp:Date;


}



export interface IntelligenceEcosystemNode {


nodeId:string;


ecosystemDomain:string;


intelligenceScore:number;


}



export interface EcosystemEvolutionCycle {


cycleId:string;


previousState:string;


currentState:string;


}


