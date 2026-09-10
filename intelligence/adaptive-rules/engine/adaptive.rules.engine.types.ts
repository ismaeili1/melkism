
import type {

AdaptiveRulesInputContract,
AdaptiveRulesRecordContract

} from "../contracts";


export interface AdaptiveRulesContext {

request:AdaptiveRulesInputContract;

history:AdaptiveRulesRecordContract[];

}



export interface AdaptiveRulesResult {

record:AdaptiveRulesRecordContract;

executionTime:number;

}

