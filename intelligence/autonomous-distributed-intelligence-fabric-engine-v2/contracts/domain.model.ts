
export interface CognitiveNetworkState {


id:string;


networkLevel:number;


distributionLevel:number;


expansionLevel:number;


governanceLevel:number;


confidence:number;


timestamp:Date;


}



export interface IntelligenceFabricNode {


nodeId:string;


networkDomain:string;


intelligenceScore:number;


}



export interface NetworkEvolutionCycle {


cycleId:string;


previousState:string;


currentState:string;


}


