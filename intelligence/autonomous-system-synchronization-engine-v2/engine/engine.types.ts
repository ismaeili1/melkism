
import type {

AutonomousOrchestrationSystemSynchronizationInput,

AutonomousOrchestrationSystemSynchronizationRecord

} from "../contracts";



export interface AutonomousOrchestrationSystemSynchronizationContext {


request:

AutonomousOrchestrationSystemSynchronizationInput;


history:

AutonomousOrchestrationSystemSynchronizationRecord[];


}



export interface AutonomousOrchestrationSystemSynchronizationResult {


record:

AutonomousOrchestrationSystemSynchronizationRecord;


executionTime:number;


}



