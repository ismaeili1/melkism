
export interface AutonomousStrategicFuturePlanningInput {

id:string;

objective:string;

strategy:string;

timeframe:string;

context:string;

}



export interface AutonomousStrategicFuturePlanningRecord {

id:string;

reasoningScore:number;

planningScore:number;

simulationScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


