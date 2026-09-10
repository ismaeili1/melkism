
export interface ReasoningEvolutionState {


id:string;


adaptationLevel:number;


inferenceLevel:number;


decisionLevel:number;


governanceLevel:number;


confidence:number;


timestamp:Date;


}



export interface ReasoningTrace {


source:string;


logic:string;


result:string;


}


