
import type {

AdaptiveEvaluationInputContract,
AdaptiveEvaluationRecordContract

} from "../contracts";


export interface AdaptiveEvaluationContext {

request:AdaptiveEvaluationInputContract;

history:AdaptiveEvaluationRecordContract[];

}



export interface AdaptiveEvaluationEngineResult {

record:AdaptiveEvaluationRecordContract;

executionTime:number;

}

