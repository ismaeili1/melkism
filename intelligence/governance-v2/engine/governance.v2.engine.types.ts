
import type {

GovernanceV2InputContract,
GovernanceV2RecordContract

} from "../contracts";


export interface GovernanceV2Context {

request:GovernanceV2InputContract;

history:GovernanceV2RecordContract[];

}



export interface GovernanceV2Result {

record:GovernanceV2RecordContract;

executionTime:number;

}

