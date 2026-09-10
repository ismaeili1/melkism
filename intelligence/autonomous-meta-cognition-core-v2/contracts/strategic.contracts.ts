
export interface AutonomousStrategicMetaCognitionInput {

id:string;

source:string;

objective:string;

context:string;

horizon:string;

}



export interface AutonomousStrategicMetaCognitionRecord {

id:string;

metaScore:number;

strategyScore:number;

reasoningScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


