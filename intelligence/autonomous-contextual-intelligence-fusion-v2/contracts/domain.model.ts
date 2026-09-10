
export interface CognitiveState {


id:string;


synthesisLevel:number;


reasoningLevel:number;


contextLevel:number;


governanceLevel:number;


confidence:number;


timestamp:Date;


}



export interface CognitiveSignal {


name:string;


weight:number;


priority:number;


}



export interface ContextModel {


id:string;


domain:string;


relation:string;


priority:number;


}


