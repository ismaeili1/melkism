
import type {

AutonomousGovernancePatternDiscoveryInput,

AutonomousGovernancePatternDiscoveryRecord

} from "../contracts";



export interface AutonomousGovernancePatternDiscoveryContext {


request:

AutonomousGovernancePatternDiscoveryInput;


history:

AutonomousGovernancePatternDiscoveryRecord[];


}



export interface AutonomousGovernancePatternDiscoveryResult {


record:

AutonomousGovernancePatternDiscoveryRecord;


executionTime:number;


}



