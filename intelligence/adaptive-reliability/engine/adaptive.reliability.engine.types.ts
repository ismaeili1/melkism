
import type {

AdaptiveReliabilityInputContract,
AdaptiveReliabilityRecordContract

} from "../contracts";


export interface AdaptiveReliabilityContext {

request:AdaptiveReliabilityInputContract;

history:AdaptiveReliabilityRecordContract[];

}


export interface AdaptiveReliabilityResult {

record:AdaptiveReliabilityRecordContract;

executionTime:number;

}

