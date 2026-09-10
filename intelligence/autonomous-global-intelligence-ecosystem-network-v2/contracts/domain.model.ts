
export interface CognitiveOSState {


id:string;


osLevel:number;


runtimeLevel:number;


ecosystemLevel:number;


governanceLevel:number;


confidence:number;


timestamp:Date;


}



export interface CognitiveOSNode {


nodeId:string;


domain:string;


intelligenceScore:number;


}



export interface CognitiveOSCycle {


cycleId:string;


previousState:string;


currentState:string;


}


