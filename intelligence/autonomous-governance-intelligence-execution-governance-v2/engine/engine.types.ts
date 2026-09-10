
import type {

AutonomousGovernanceExecutionGovernanceInput,

AutonomousGovernanceExecutionGovernanceRecord

} from "../contracts";



export interface AutonomousGovernanceExecutionGovernanceContext {


request:

AutonomousGovernanceExecutionGovernanceInput;


history:

AutonomousGovernanceExecutionGovernanceRecord[];


}



export interface AutonomousGovernanceExecutionGovernanceResult {


record:

AutonomousGovernanceExecutionGovernanceRecord;


executionTime:number;


}



