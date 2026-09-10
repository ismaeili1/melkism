
export interface AGIState {


id:string;


agiLevel:number;


cognitiveLevel:number;


operationalLevel:number;


governanceLevel:number;


confidence:number;


timestamp:Date;


}



export interface AGINode {


nodeId:string;


domain:string;


intelligenceScore:number;


}



export interface AGIEvolutionCycle {


cycleId:string;


previousState:string;


currentState:string;


}


