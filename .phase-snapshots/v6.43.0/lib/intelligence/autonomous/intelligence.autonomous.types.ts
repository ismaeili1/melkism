
export interface IntelligenceAutonomousTask {


id:string;


type:string;


input:unknown;


context?:unknown;


priority?:number;


createdAt:Date;


}



export interface IntelligenceAutonomousResult {


id:string;


status:string;


steps:string[];


result:unknown;


confidence:number;


completedAt:Date;


}

