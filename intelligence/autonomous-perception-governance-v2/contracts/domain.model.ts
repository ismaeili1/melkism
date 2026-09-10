
export interface PerceptionState {


id:string;


perceptionLevel:number;


analyticsLevel:number;


predictionLevel:number;


governanceLevel:number;


confidence:number;


timestamp:Date;


}



export interface AnalyticsSignal {


name:string;


weight:number;


priority:number;


}


