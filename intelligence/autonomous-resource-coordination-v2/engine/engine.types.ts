
import type {

AutonomousOrchestrationResourceCoordinationInput,

AutonomousOrchestrationResourceCoordinationRecord

} from "../contracts";



export interface AutonomousOrchestrationResourceCoordinationContext {


request:

AutonomousOrchestrationResourceCoordinationInput;


history:

AutonomousOrchestrationResourceCoordinationRecord[];


}



export interface AutonomousOrchestrationResourceCoordinationResult {


record:

AutonomousOrchestrationResourceCoordinationRecord;


executionTime:number;


}



