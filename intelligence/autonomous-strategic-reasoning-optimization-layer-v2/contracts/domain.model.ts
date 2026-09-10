
export interface ReasoningState {


id:string;


reasoningLevel:number;


decisionLevel:number;


optimizationLevel:number;


governanceLevel:number;


confidence:number;


timestamp:Date;


}



export interface DecisionEvolutionCycle {


cycleId:string;


previousDecision:string;


newDecision:string;


}



export interface StrategicReasoningState {


strategyId:string;


direction:string;


effectiveness:number;


}


