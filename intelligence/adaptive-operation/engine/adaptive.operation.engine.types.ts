
import type {

AdaptiveOperationInputContract,
AdaptiveOperationRecordContract

} from "../contracts";


export interface AdaptiveOperationContext {

request:AdaptiveOperationInputContract;

history:AdaptiveOperationRecordContract[];

}



export interface AdaptiveOperationResult {

record:AdaptiveOperationRecordContract;

executionTime:number;

}

