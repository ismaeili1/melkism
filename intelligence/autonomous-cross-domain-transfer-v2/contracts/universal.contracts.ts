
export interface AutonomousUniversalCrossDomainTransferInput {

id:string;

domain:string;

knowledge:string;

objective:string;

context:string;

}



export interface AutonomousUniversalCrossDomainTransferRecord {

id:string;

reasoningScore:number;

adaptationScore:number;

transferScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


