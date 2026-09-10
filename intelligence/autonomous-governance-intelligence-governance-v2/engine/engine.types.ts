
import type {

AutonomousGovernanceIntelligenceGovernanceInput,

AutonomousGovernanceIntelligenceGovernanceRecord

} from "../contracts";



export interface AutonomousGovernanceIntelligenceGovernanceContext {


request:AutonomousGovernanceIntelligenceGovernanceInput;


history:AutonomousGovernanceIntelligenceGovernanceRecord[];


}



export interface AutonomousGovernanceIntelligenceGovernanceResult {


record:AutonomousGovernanceIntelligenceGovernanceRecord;


executionTime:number;


}



