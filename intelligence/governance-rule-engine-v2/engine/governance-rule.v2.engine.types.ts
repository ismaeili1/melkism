
import type {

GovernanceRuleV2InputContract,
GovernanceRuleV2RecordContract

} from "../contracts";


export interface GovernanceRuleV2Context {

request:GovernanceRuleV2InputContract;

history:GovernanceRuleV2RecordContract[];

}



export interface GovernanceRuleV2Result {

record:GovernanceRuleV2RecordContract;

executionTime:number;

}

