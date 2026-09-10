
import type {

AutonomousGovernanceAwarenessInput,

AutonomousGovernanceAwarenessRecord

} from "../contracts";



export interface AutonomousGovernanceAwarenessContext {


request:

AutonomousGovernanceAwarenessInput;


history:

AutonomousGovernanceAwarenessRecord[];


}



export interface AutonomousGovernanceAwarenessResult {


record:

AutonomousGovernanceAwarenessRecord;


executionTime:number;


}



