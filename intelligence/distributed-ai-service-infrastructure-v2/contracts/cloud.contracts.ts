
export interface CloudService {


id:string;


name:string;


region:string;


status:string;


}



export interface CloudRequest {


id:string;


service:string;


payload:string;


timestamp:Date;


}



export interface CloudRuntimeState {


availability:string;


health:string;


}



