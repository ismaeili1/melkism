
import type {

GovernanceDecisionControlV2InputContract,
GovernanceDecisionControlV2RecordContract

} from "../contracts";


export interface GovernanceDecisionControlV2Context {

request:GovernanceDecisionControlV2InputContract;

history:GovernanceDecisionControlV2RecordContract[];

}



export interface GovernanceDecisionControlV2Result {

record:GovernanceDecisionControlV2RecordContract;

executionTime:number;

}

