
export interface AutonomousGovernancePlanningInput {

id:string;

objective:string[];

context:string;

}



export interface AutonomousGovernancePlanningRecord {

id:string;

planningScore:number;

strategyScore:number;

executionScore:number;

monitoringScore:number;

confidence:number;

status:string;

createdAt:Date;

}


