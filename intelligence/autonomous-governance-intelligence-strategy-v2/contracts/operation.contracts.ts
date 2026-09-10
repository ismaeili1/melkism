
export interface AutonomousGovernanceStrategyInput {

id:string;

objective:string[];

context:string;

}



export interface AutonomousGovernanceStrategyRecord {

id:string;

planningScore:number;

strategyScore:number;

executionScore:number;

monitoringScore:number;

confidence:number;

status:string;

createdAt:Date;

}


