
import type {

OperationV2InputContract,
OperationV2RecordContract

} from "../contracts";


export interface OperationV2Context {

request:OperationV2InputContract;

history:OperationV2RecordContract[];

}



export interface OperationV2Result {

record:OperationV2RecordContract;

executionTime:number;

}

