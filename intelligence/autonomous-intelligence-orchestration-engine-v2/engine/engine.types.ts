
import type {

AutonomousIntegratedIntelligenceOrchestrationInput,

AutonomousIntegratedIntelligenceOrchestrationRecord

} from "../contracts";



export interface AutonomousIntegratedIntelligenceOrchestrationContext {


request:

AutonomousIntegratedIntelligenceOrchestrationInput;


history:

AutonomousIntegratedIntelligenceOrchestrationRecord[];


}



export interface AutonomousIntegratedIntelligenceOrchestrationResult {


record:

AutonomousIntegratedIntelligenceOrchestrationRecord;


executionTime:number;


}



