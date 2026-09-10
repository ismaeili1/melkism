
import type {

GovernancePolicyV2InputContract,
GovernancePolicyV2RecordContract

} from "../contracts";


export interface GovernancePolicyV2Context {

request:GovernancePolicyV2InputContract;

history:GovernancePolicyV2RecordContract[];

}



export interface GovernancePolicyV2Result {

record:GovernancePolicyV2RecordContract;

executionTime:number;

}

