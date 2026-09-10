
import type {

ActionV2InputContract,
ActionV2RecordContract

} from "../contracts";


export interface ActionV2Context {

request:ActionV2InputContract;

history:ActionV2RecordContract[];

}



export interface ActionV2Result {

record:ActionV2RecordContract;

executionTime:number;

}

