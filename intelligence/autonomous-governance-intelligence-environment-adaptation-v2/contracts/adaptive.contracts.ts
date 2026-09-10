
export interface AutonomousGovernanceEnvironmentAdaptationInput {

id:string;

environment:string;

changeSignal:string;

}



export interface AutonomousGovernanceEnvironmentAdaptationRecord {

id:string;

adaptationScore:number;

changeScore:number;

resilienceScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


