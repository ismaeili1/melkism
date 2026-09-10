
import type {

IntelligenceService,

SystemCommand,

RuntimeKernelState

} from "../contracts";



export interface SystemExecutionContext {


service:

IntelligenceService;


command:

SystemCommand;


kernel:

RuntimeKernelState;


}



export interface SystemExecutionResult {


status:string;


executionTime:number;


}



