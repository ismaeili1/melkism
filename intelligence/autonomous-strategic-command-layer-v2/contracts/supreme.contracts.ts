
export interface AutonomousSupremeStrategicCommandInput {

id:string;

target:string;

operation:string;

}



export interface AutonomousSupremeStrategicCommandRecord {

id:string;

orchestrationScore:number;

synchronizationScore:number;

strategyScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


