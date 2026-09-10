
import type {

AdaptiveStabilityInputContract,
AdaptiveStabilityRecordContract

} from "../contracts";


export interface AdaptiveStabilityContext {

request:AdaptiveStabilityInputContract;

history:AdaptiveStabilityRecordContract[];

}



export interface AdaptiveStabilityResult {

record:AdaptiveStabilityRecordContract;

executionTime:number;

}

