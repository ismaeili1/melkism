
import type {

AdaptiveStrategyInputContract,
AdaptiveStrategyRecordContract

} from "../contracts";


export interface AdaptiveStrategyContext {

request:AdaptiveStrategyInputContract;

history:AdaptiveStrategyRecordContract[];

}



export interface AdaptiveStrategyResult {

record:AdaptiveStrategyRecordContract;

executionTime:number;

}

