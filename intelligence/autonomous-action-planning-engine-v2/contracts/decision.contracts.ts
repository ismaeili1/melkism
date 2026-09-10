
export interface AutonomousDecisionActionPlanningInput {

id:string;

source:string;

objective:string;

operation:string;

}



export interface AutonomousDecisionActionPlanningRecord {

id:string;

decisionScore:number;

actionScore:number;

optimizationScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


