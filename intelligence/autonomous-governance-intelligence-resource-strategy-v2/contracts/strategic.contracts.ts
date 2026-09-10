
export interface AutonomousGovernanceResourceStrategyInput {

id:string;

currentState:string;

objective:string;

}



export interface AutonomousGovernanceResourceStrategyRecord {

id:string;

planningScore:number;

optimizationScore:number;

resourceScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


