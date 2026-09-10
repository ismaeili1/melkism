
export interface AutonomousEcosystemCoordinationInput {

id:string;

ecosystemTarget:string;

operation:string;

}



export interface AutonomousEcosystemCoordinationRecord {

id:string;

ecosystemScore:number;

orchestrationScore:number;

coordinationScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


