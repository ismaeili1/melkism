
import type {

AutonomousGovernanceReasoningGraphInput,

AutonomousGovernanceReasoningGraphRecord

} from "../contracts";



export interface AutonomousGovernanceReasoningGraphContext {


request:

AutonomousGovernanceReasoningGraphInput;


history:

AutonomousGovernanceReasoningGraphRecord[];


}



export interface AutonomousGovernanceReasoningGraphResult {


record:

AutonomousGovernanceReasoningGraphRecord;


executionTime:number;


}



