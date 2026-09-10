
import type {

AutonomousGovernanceReasoningGovernanceInput,

AutonomousGovernanceReasoningGovernanceRecord

} from "../contracts";



export interface AutonomousGovernanceReasoningGovernanceContext {


request:

AutonomousGovernanceReasoningGovernanceInput;


history:

AutonomousGovernanceReasoningGovernanceRecord[];


}



export interface AutonomousGovernanceReasoningGovernanceResult {


record:

AutonomousGovernanceReasoningGovernanceRecord;


executionTime:number;


}



