
import type {

AutonomousReasoningStrategicOptimizationInput,

AutonomousReasoningStrategicOptimizationRecord

} from "../contracts";



export interface AutonomousReasoningStrategicOptimizationContext {


request:

AutonomousReasoningStrategicOptimizationInput;


history:

AutonomousReasoningStrategicOptimizationRecord[];


}



export interface AutonomousReasoningStrategicOptimizationResult {


record:

AutonomousReasoningStrategicOptimizationRecord;


executionTime:number;


}



