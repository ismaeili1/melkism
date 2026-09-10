
import type {

AdaptivePolicyInputContract,
AdaptivePolicyRecordContract

} from "../contracts";


export interface AdaptivePolicyContext {

request:AdaptivePolicyInputContract;

history:AdaptivePolicyRecordContract[];

}



export interface AdaptivePolicyResult {

record:AdaptivePolicyRecordContract;

executionTime:number;

}

