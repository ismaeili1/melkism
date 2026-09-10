
export interface AutonomousAGIIntelligenceFabricInput {

id:string;

source:string;

objective:string;

context:string;

intelligenceDomain:string;

}



export interface AutonomousAGIIntelligenceFabricRecord {

id:string;

fabricScore:number;

agiScore:number;

coordinationScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


