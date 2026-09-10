
import type {

AdaptiveDecisionInputContract,
AdaptiveDecisionRecordContract

} from "../contracts";


export interface AdaptiveDecisionContext {

request:AdaptiveDecisionInputContract;

history:AdaptiveDecisionRecordContract[];

}



export interface AdaptiveDecisionResult {

record:AdaptiveDecisionRecordContract;

executionTime:number;

}

