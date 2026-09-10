
import type {

CognitiveNetworkDistributedIntelligenceGovernanceInput,

CognitiveNetworkDistributedIntelligenceGovernanceRecord

} from "../contracts";



export interface CognitiveNetworkDistributedIntelligenceGovernanceContext {


request:

CognitiveNetworkDistributedIntelligenceGovernanceInput;


history:

CognitiveNetworkDistributedIntelligenceGovernanceRecord[];


}



export interface CognitiveNetworkDistributedIntelligenceGovernanceResult {


record:

CognitiveNetworkDistributedIntelligenceGovernanceRecord;


executionTime:number;


}



