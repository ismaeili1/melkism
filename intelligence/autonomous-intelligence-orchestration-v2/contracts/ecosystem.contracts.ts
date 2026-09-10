
export interface AutonomousEcosystemOrchestrationInput {

id:string;

ecosystemTarget:string;

operation:string;

}



export interface AutonomousEcosystemOrchestrationRecord {

id:string;

ecosystemScore:number;

orchestrationScore:number;

coordinationScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


