
export interface ExecutionPlan {

id:string;

steps:string[];

confidence:number;

}



export interface StrategyModel {

id:string;

strategy:string;

score:number;

}



export interface MonitoringSignal {

id:string;

metric:string;

value:number;

}



