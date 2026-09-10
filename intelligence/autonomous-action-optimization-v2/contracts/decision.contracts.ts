
export interface AutonomousDecisionActionOptimizationInput {

id:string;

objective:string;

operation:string;

}



export interface AutonomousDecisionActionOptimizationRecord {

id:string;

decisionScore:number;

planningScore:number;

optimizationScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


