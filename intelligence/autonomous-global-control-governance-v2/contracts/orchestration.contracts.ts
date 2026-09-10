
export interface AutonomousOrchestrationGlobalControlGovernanceInput {

id:string;

source:string;

objective:string;

operation:string;

}



export interface AutonomousOrchestrationGlobalControlGovernanceRecord {

id:string;

orchestrationScore:number;

synchronizationScore:number;

resourceScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


