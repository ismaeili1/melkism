
import type {

AdaptiveExecutionInputContract,
AdaptiveExecutionRecordContract

} from "../contracts";


export interface AdaptiveExecutionContext {

request:AdaptiveExecutionInputContract;

history:AdaptiveExecutionRecordContract[];

}



export interface AdaptiveExecutionResult {

record:AdaptiveExecutionRecordContract;

executionTime:number;

}

