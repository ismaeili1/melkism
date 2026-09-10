
import type {

AutonomousReflectiveLearningOptimizationInput,

AutonomousReflectiveLearningOptimizationRecord

} from "../contracts";



export interface AutonomousReflectiveLearningOptimizationContext {


request:

AutonomousReflectiveLearningOptimizationInput;


history:

AutonomousReflectiveLearningOptimizationRecord[];


}



export interface AutonomousReflectiveLearningOptimizationResult {


record:

AutonomousReflectiveLearningOptimizationRecord;


executionTime:number;


}



