
export interface AutonomousPerceptionPerceptionGovernanceInput {

id:string;

source:string;

signal:string;

operation:string;

}



export interface AutonomousPerceptionPerceptionGovernanceRecord {

id:string;

perceptionScore:number;

analyticsScore:number;

predictionScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


