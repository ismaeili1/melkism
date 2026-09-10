
import type {

AutonomousAgentDistributedIntelligenceGovernanceInput,

AutonomousAgentDistributedIntelligenceGovernanceRecord

} from "../contracts";



export interface AutonomousAgentDistributedIntelligenceGovernanceContext {


request:

AutonomousAgentDistributedIntelligenceGovernanceInput;


history:

AutonomousAgentDistributedIntelligenceGovernanceRecord[];


}



export interface AutonomousAgentDistributedIntelligenceGovernanceResult {


record:

AutonomousAgentDistributedIntelligenceGovernanceRecord;


executionTime:number;


}



