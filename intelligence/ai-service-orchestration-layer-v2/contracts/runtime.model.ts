
export interface RuntimeAgent {


id:string;


name:string;


state:string;


}



export interface RuntimeContext {


requestId:string;


events:string[];


}



export interface ExecutionState {


status:string;


progress:number;


}



