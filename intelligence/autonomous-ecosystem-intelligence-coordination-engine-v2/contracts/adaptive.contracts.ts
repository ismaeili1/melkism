
export interface AutonomousAdaptiveEcosystemCoordinationInput {

id:string;

environment:string;

ecosystem:string[];

objective:string;

context:string;

}



export interface AutonomousAdaptiveEcosystemCoordinationRecord {

id:string;

adaptationScore:number;

coordinationScore:number;

environmentScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


