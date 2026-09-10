
import type {

StrategyV2InputContract,
StrategyV2RecordContract

} from "../contracts";


export interface StrategyV2Context {

request:StrategyV2InputContract;

history:StrategyV2RecordContract[];

}



export interface StrategyV2Result {

record:StrategyV2RecordContract;

executionTime:number;

}

