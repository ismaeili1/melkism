
import type {

CloudService,

CloudRequest,

CloudRuntimeState

} from "../contracts";



export interface CloudExecutionContext {


service:

CloudService;


request:

CloudRequest;


runtime:

CloudRuntimeState;


}



export interface CloudExecutionResult {


status:string;


executionTime:number;


}



