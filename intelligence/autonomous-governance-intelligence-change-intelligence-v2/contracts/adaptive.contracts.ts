
export interface AutonomousGovernanceChangeIntelligenceInput {

id:string;

environment:string;

changeSignal:string;

}



export interface AutonomousGovernanceChangeIntelligenceRecord {

id:string;

adaptationScore:number;

changeScore:number;

resilienceScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


