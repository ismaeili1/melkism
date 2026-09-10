
export interface AutonomousOrchestrationSystemSynchronizationInput {

id:string;

source:string;

objective:string;

operation:string;

}



export interface AutonomousOrchestrationSystemSynchronizationRecord {

id:string;

orchestrationScore:number;

synchronizationScore:number;

resourceScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


