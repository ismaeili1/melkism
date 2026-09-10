
import type {

SelfAwareIntelligenceSelfAwareGovernanceInput,

SelfAwareIntelligenceSelfAwareGovernanceRecord

} from "../contracts";



export interface SelfAwareIntelligenceSelfAwareGovernanceContext {


request:

SelfAwareIntelligenceSelfAwareGovernanceInput;


history:

SelfAwareIntelligenceSelfAwareGovernanceRecord[];


}



export interface SelfAwareIntelligenceSelfAwareGovernanceResult {


record:

SelfAwareIntelligenceSelfAwareGovernanceRecord;


executionTime:number;


}



