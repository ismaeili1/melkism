
export interface AutonomousIntegratedResourceOptimizationInput {

id:string;

objective:string;

intelligenceLayers:string[];

context:string;

}



export interface AutonomousIntegratedResourceOptimizationRecord {

id:string;

integrationScore:number;

coordinationScore:number;

optimizationScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


