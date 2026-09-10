
import type {

MetaOrchestrationV2InputContract,
MetaOrchestrationV2RecordContract

} from "../contracts";


export interface MetaOrchestrationV2Context {

request:MetaOrchestrationV2InputContract;

history:MetaOrchestrationV2RecordContract[];

}



export interface MetaOrchestrationV2Result {

record:MetaOrchestrationV2RecordContract;

executionTime:number;

}

