
import type {

PolicyV2InputContract,
PolicyV2RecordContract

} from "../contracts";


export interface PolicyV2Context {

request:PolicyV2InputContract;

history:PolicyV2RecordContract[];

}



export interface PolicyV2Result {

record:PolicyV2RecordContract;

executionTime:number;

}

