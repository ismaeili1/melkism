
import type {

AutonomousGovernanceExecutionInput,

AutonomousGovernanceExecutionRecord

} from "../contracts";



export interface AutonomousGovernanceExecutionContext {


request:

AutonomousGovernanceExecutionInput;


history:

AutonomousGovernanceExecutionRecord[];


}



export interface AutonomousGovernanceExecutionResult {


record:

AutonomousGovernanceExecutionRecord;


executionTime:number;


}



