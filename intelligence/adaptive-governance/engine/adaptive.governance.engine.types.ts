
import type {

AdaptiveGovernanceInputContract,
AdaptiveGovernanceRecordContract

} from "../contracts";


export interface AdaptiveGovernanceContext {

request:AdaptiveGovernanceInputContract;

history:AdaptiveGovernanceRecordContract[];

}



export interface AdaptiveGovernanceResult {

record:AdaptiveGovernanceRecordContract;

executionTime:number;

}

