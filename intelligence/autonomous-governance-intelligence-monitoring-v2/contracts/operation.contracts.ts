
export interface AutonomousGovernanceMonitoringInput {

id:string;

objective:string[];

context:string;

}



export interface AutonomousGovernanceMonitoringRecord {

id:string;

planningScore:number;

strategyScore:number;

executionScore:number;

monitoringScore:number;

confidence:number;

status:string;

createdAt:Date;

}


