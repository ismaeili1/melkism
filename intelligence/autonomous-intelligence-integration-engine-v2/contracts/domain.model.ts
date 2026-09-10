
export interface CognitiveSynthesisState {


id:string;


synthesisLevel:number;


integrationLevel:number;


fusionLevel:number;


governanceLevel:number;


confidence:number;


timestamp:Date;


}



export interface IntelligenceFusionNode {


nodeId:string;


domain:string;


fusionScore:number;


}



export interface SynthesisCycle {


cycleId:string;


previousState:string;


currentState:string;


}


