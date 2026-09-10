
import type {

AutonomousGovernancePerceptionInput,

AutonomousGovernancePerceptionRecord

} from "../contracts";



export interface AutonomousGovernancePerceptionContext {


request:

AutonomousGovernancePerceptionInput;


history:

AutonomousGovernancePerceptionRecord[];


}



export interface AutonomousGovernancePerceptionResult {


record:

AutonomousGovernancePerceptionRecord;


executionTime:number;


}



