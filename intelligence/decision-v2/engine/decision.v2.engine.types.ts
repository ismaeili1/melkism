
import type {

DecisionV2InputContract,
DecisionV2RecordContract

} from "../contracts";


export interface DecisionV2Context {

request:DecisionV2InputContract;

history:DecisionV2RecordContract[];

}



export interface DecisionV2Result {

record:DecisionV2RecordContract;

executionTime:number;

}

