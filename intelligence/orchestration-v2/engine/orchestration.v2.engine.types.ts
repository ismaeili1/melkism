
import type {

OrchestrationV2InputContract,
OrchestrationV2RecordContract

} from "../contracts";


export interface OrchestrationV2Context {

request:OrchestrationV2InputContract;

history:OrchestrationV2RecordContract[];

}



export interface OrchestrationV2Result {

record:OrchestrationV2RecordContract;

executionTime:number;

}

