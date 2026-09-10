
import type {

GovernanceCoreV2InputContract,
GovernanceCoreV2RecordContract

} from "../contracts";


export interface GovernanceCoreV2Context {

request:GovernanceCoreV2InputContract;

history:GovernanceCoreV2RecordContract[];

}



export interface GovernanceCoreV2Result {

record:GovernanceCoreV2RecordContract;

executionTime:number;

}

