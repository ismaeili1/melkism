
import type {

AutonomousGovernanceSelfAwarenessInput,

AutonomousGovernanceSelfAwarenessRecord

} from "../contracts";



export interface AutonomousGovernanceSelfAwarenessContext {


request:

AutonomousGovernanceSelfAwarenessInput;


history:

AutonomousGovernanceSelfAwarenessRecord[];


}



export interface AutonomousGovernanceSelfAwarenessResult {


record:

AutonomousGovernanceSelfAwarenessRecord;


executionTime:number;


}



