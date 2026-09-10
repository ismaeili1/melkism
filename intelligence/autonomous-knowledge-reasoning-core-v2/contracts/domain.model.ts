
export interface DecisionEvolutionState {


id:string;


reasoningLevel:number;


decisionLevel:number;


predictionLevel:number;


governanceLevel:number;


confidence:number;


timestamp:Date;


}



export interface DecisionNode {


id:string;


option:string;


score:number;


}



export interface DecisionOutcome {


decision:string;


result:string;


value:number;


}


