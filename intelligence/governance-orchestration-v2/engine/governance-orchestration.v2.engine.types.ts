
import type {

GovernanceOrchestrationV2InputContract,
GovernanceOrchestrationV2RecordContract

} from "../contracts";


export interface GovernanceOrchestrationV2Context {

request:GovernanceOrchestrationV2InputContract;

history:GovernanceOrchestrationV2RecordContract[];

}



export interface GovernanceOrchestrationV2Result {

record:GovernanceOrchestrationV2RecordContract;

executionTime:number;

}

