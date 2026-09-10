
export interface AutonomousAdaptiveEnvironmentAdaptationInput {

id:string;

environment:string;

ecosystem:string[];

objective:string;

context:string;

}



export interface AutonomousAdaptiveEnvironmentAdaptationRecord {

id:string;

adaptationScore:number;

coordinationScore:number;

environmentScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


