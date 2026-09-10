
export interface AutonomousPerceptionPerceptionInput {

id:string;

signal:string;

environment:string;

context:string;

modality:string;

}



export interface AutonomousPerceptionPerceptionRecord {

id:string;

perceptionScore:number;

contextScore:number;

fusionScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


