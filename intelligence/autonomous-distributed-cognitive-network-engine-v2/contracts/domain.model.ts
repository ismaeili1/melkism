
export interface CollectiveIntelligenceState {


id:string;


collectiveLevel:number;


networkLevel:number;


reasoningLevel:number;


governanceLevel:number;


confidence:number;


timestamp:Date;


}



export interface CollectiveNode {


nodeId:string;


domain:string;


collectiveScore:number;


}



export interface CollectiveEvolutionCycle {


cycleId:string;


previousState:string;


currentState:string;


}


