
export interface CognitiveEcosystemState {


id:string;


ecosystemLevel:number;


networkLevel:number;


collaborationLevel:number;


governanceLevel:number;


confidence:number;


timestamp:Date;


}



export interface IntelligenceEcosystemNode {


nodeId:string;


domain:string;


connectionScore:number;


}



export interface CollaborationCycle {


cycleId:string;


previousState:string;


currentState:string;


}


