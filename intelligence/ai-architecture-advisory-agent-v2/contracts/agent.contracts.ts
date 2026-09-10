
export interface AgentInput {


id:string;


task:string;


domain:string;


context:string;


}



export interface AgentExecutionRecord {


id:string;


agent:string;


result:string;


confidence:number;


status:string;


createdAt:Date;


}



