
export interface RuntimeEvent {


id:string;


type:string;


source:string;


payload:string;


timestamp:Date;


}




export interface RuntimeExecutionRecord {


id:string;


eventType:string;


status:string;


confidence:number;


createdAt:Date;


}



