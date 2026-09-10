
export interface AutonomousGovernanceGoalOptimizationInput {

id:string;

currentState:string;

objective:string;

}



export interface AutonomousGovernanceGoalOptimizationRecord {

id:string;

planningScore:number;

optimizationScore:number;

resourceScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


