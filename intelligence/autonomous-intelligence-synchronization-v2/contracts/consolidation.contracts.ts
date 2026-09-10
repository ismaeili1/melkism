
export interface AutonomousIntelligenceSynchronizationInput {

id:string;

intelligenceModule:string;

operation:string;

}



export interface AutonomousIntelligenceSynchronizationRecord {

id:string;

integrationScore:number;

coordinationScore:number;

synchronizationScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


