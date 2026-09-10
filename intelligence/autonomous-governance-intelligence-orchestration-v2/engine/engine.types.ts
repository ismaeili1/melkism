
import type {

AutonomousGovernanceOrchestrationInput,

AutonomousGovernanceOrchestrationRecord

} from "../contracts";



export interface AutonomousGovernanceOrchestrationContext {


request:

AutonomousGovernanceOrchestrationInput;


history:

AutonomousGovernanceOrchestrationRecord[];


}



export interface AutonomousGovernanceOrchestrationResult {


record:

AutonomousGovernanceOrchestrationRecord;


executionTime:number;


}



