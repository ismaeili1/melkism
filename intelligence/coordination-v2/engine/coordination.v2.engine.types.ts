
import type {

CoordinationV2InputContract,
CoordinationV2RecordContract

} from "../contracts";


export interface CoordinationV2Context {

request:CoordinationV2InputContract;

history:CoordinationV2RecordContract[];

}



export interface CoordinationV2Result {

record:CoordinationV2RecordContract;

executionTime:number;

}

