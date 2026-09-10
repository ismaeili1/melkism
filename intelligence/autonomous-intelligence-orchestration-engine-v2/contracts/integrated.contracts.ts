
export interface AutonomousIntegratedIntelligenceOrchestrationInput {

id:string;

objective:string;

intelligenceLayers:string[];

context:string;

}



export interface AutonomousIntegratedIntelligenceOrchestrationRecord {

id:string;

integrationScore:number;

coordinationScore:number;

optimizationScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


