
export interface AutonomousIntelligenceOrchestrationInput {

id:string;

intelligenceModule:string;

operation:string;

}



export interface AutonomousIntelligenceOrchestrationRecord {

id:string;

integrationScore:number;

coordinationScore:number;

synchronizationScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


