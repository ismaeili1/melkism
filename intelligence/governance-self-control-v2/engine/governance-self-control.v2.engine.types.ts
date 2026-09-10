
import type {

GovernanceSelfControlV2InputContract,
GovernanceSelfControlV2RecordContract

} from "../contracts";


export interface GovernanceSelfControlV2Context {

request:GovernanceSelfControlV2InputContract;

history:GovernanceSelfControlV2RecordContract[];

}



export interface GovernanceSelfControlV2Result {

record:GovernanceSelfControlV2RecordContract;

executionTime:number;

}

