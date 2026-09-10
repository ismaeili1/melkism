
import type {

AutonomousOrchestrationGlobalOrchestrationInput,

AutonomousOrchestrationGlobalOrchestrationRecord

} from "../contracts";



export interface AutonomousOrchestrationGlobalOrchestrationContext {


request:

AutonomousOrchestrationGlobalOrchestrationInput;


history:

AutonomousOrchestrationGlobalOrchestrationRecord[];


}



export interface AutonomousOrchestrationGlobalOrchestrationResult {


record:

AutonomousOrchestrationGlobalOrchestrationRecord;


executionTime:number;


}



