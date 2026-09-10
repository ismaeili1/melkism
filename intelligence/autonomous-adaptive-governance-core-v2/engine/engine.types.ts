
import type {

AutonomousGovernanceAdaptiveGovernanceInput,

AutonomousGovernanceAdaptiveGovernanceRecord

} from "../contracts";



export interface AutonomousGovernanceAdaptiveGovernanceContext {


request:

AutonomousGovernanceAdaptiveGovernanceInput;


history:

AutonomousGovernanceAdaptiveGovernanceRecord[];


}



export interface AutonomousGovernanceAdaptiveGovernanceResult {


record:

AutonomousGovernanceAdaptiveGovernanceRecord;


executionTime:number;


}



