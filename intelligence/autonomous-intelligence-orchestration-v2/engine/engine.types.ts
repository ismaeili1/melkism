
import type {

AutonomousEcosystemOrchestrationInput,

AutonomousEcosystemOrchestrationRecord

} from "../contracts";



export interface AutonomousEcosystemOrchestrationContext {


request:

AutonomousEcosystemOrchestrationInput;


history:

AutonomousEcosystemOrchestrationRecord[];


}



export interface AutonomousEcosystemOrchestrationResult {


record:

AutonomousEcosystemOrchestrationRecord;


executionTime:number;


}



