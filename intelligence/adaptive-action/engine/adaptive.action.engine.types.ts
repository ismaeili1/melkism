
import type {

AdaptiveActionInputContract,
AdaptiveActionRecordContract

} from "../contracts";


export interface AdaptiveActionContext {

request:AdaptiveActionInputContract;

history:AdaptiveActionRecordContract[];

}



export interface AdaptiveActionResult {

record:AdaptiveActionRecordContract;

executionTime:number;

}

