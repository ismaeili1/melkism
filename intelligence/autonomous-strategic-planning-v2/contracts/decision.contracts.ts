
export interface AutonomousDecisionStrategicPlanningInput {

id:string;

objective:string;

operation:string;

}



export interface AutonomousDecisionStrategicPlanningRecord {

id:string;

decisionScore:number;

planningScore:number;

optimizationScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


