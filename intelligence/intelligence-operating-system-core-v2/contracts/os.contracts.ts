
export interface IntelligenceService {


id:string;


name:string;


status:string;


}



export interface SystemCommand {


id:string;


action:string;


payload:string;


timestamp:Date;


}



export interface RuntimeKernelState {


state:string;


health:string;


}



