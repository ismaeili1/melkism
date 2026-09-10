
export interface AutonomousPerceptionPerceptionCoreInput {

id:string;

source:string;

signal:string;

operation:string;

}



export interface AutonomousPerceptionPerceptionCoreRecord {

id:string;

perceptionScore:number;

analyticsScore:number;

predictionScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


