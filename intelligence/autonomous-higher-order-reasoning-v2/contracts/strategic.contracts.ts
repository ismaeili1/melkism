
export interface AutonomousStrategicHigherOrderReasoningInput {

id:string;

source:string;

objective:string;

context:string;

horizon:string;

}



export interface AutonomousStrategicHigherOrderReasoningRecord {

id:string;

metaScore:number;

strategyScore:number;

reasoningScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


