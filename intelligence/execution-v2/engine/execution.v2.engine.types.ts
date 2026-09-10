
import type {

ExecutionV2InputContract,
ExecutionV2RecordContract

} from "../contracts";


export interface ExecutionV2Context {

request:ExecutionV2InputContract;

history:ExecutionV2RecordContract[];

}



export interface ExecutionV2Result {

record:ExecutionV2RecordContract;

executionTime:number;

}

