
export interface AutonomousGovernanceStrategicPlanningInput {

id:string;

currentState:string;

objective:string;

}



export interface AutonomousGovernanceStrategicPlanningRecord {

id:string;

planningScore:number;

optimizationScore:number;

resourceScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


