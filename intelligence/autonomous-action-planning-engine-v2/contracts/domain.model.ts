
export interface AutonomousDecisionState {


id:string;


decisionLevel:number;


actionLevel:number;


optimizationLevel:number;


governanceLevel:number;


confidence:number;


timestamp:Date;


}



export interface DecisionSignal {


name:string;


weight:number;


priority:number;


}



export interface ActionPlan {


id:string;


objective:string;


steps:string[];


priority:number;


}


