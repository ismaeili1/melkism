
export interface GlobalOrchestrationState {


id:string;


orchestrationLevel:number;


synchronizationLevel:number;


resourceLevel:number;


governanceLevel:number;


confidence:number;


timestamp:Date;


}



export interface SystemNode {


id:string;


name:string;


status:string;


priority:number;


}



export interface ResourceAllocation {


id:string;


resource:string;


capacity:number;


allocated:number;


}


