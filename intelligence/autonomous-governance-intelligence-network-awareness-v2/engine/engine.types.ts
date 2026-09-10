
import type {

AutonomousGovernanceNetworkAwarenessInput,

AutonomousGovernanceNetworkAwarenessRecord

} from "../contracts";



export interface AutonomousGovernanceNetworkAwarenessContext {


request:

AutonomousGovernanceNetworkAwarenessInput;


history:

AutonomousGovernanceNetworkAwarenessRecord[];


}



export interface AutonomousGovernanceNetworkAwarenessResult {


record:

AutonomousGovernanceNetworkAwarenessRecord;


executionTime:number;


}



