
export interface AutonomousIntelligenceIntegrationCoreInput {

id:string;

intelligenceModule:string;

operation:string;

}



export interface AutonomousIntelligenceIntegrationCoreRecord {

id:string;

integrationScore:number;

coordinationScore:number;

synchronizationScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


