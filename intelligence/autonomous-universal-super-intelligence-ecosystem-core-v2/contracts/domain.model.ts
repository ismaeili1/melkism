
export interface SuperEcosystemState {

id:string;

superLevel:number;

synthesisLevel:number;

collaborationLevel:number;

governanceLevel:number;

confidence:number;

timestamp:Date;

}



export interface IntelligenceSynthesisNode {

nodeId:string;

domain:string;

synthesisScore:number;

}



export interface EvolutionCycle {

cycleId:string;

previousState:string;

currentState:string;

}


