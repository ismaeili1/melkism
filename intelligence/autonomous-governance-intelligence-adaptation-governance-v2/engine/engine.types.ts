
import type {

AutonomousGovernanceAdaptationGovernanceInput,

AutonomousGovernanceAdaptationGovernanceRecord

} from "../contracts";



export interface AutonomousGovernanceAdaptationGovernanceContext {


request:

AutonomousGovernanceAdaptationGovernanceInput;


history:

AutonomousGovernanceAdaptationGovernanceRecord[];


}



export interface AutonomousGovernanceAdaptationGovernanceResult {


record:

AutonomousGovernanceAdaptationGovernanceRecord;


executionTime:number;


}



