
export interface AutonomousAGIMultiIntelligenceCoordinationInput {

id:string;

source:string;

objective:string;

context:string;

intelligenceDomain:string;

}



export interface AutonomousAGIMultiIntelligenceCoordinationRecord {

id:string;

fabricScore:number;

agiScore:number;

coordinationScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


