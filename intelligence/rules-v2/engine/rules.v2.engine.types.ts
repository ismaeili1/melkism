
import type {

RulesV2InputContract,
RulesV2RecordContract

} from "../contracts";


export interface RulesV2Context {

request:RulesV2InputContract;

history:RulesV2RecordContract[];

}



export interface RulesV2Result {

record:RulesV2RecordContract;

executionTime:number;

}

