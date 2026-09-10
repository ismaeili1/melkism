
import type {

AutonomousIntegratedResourceOptimizationInput,

AutonomousIntegratedResourceOptimizationRecord

} from "../contracts";



export interface AutonomousIntegratedResourceOptimizationContext {


request:

AutonomousIntegratedResourceOptimizationInput;


history:

AutonomousIntegratedResourceOptimizationRecord[];


}



export interface AutonomousIntegratedResourceOptimizationResult {


record:

AutonomousIntegratedResourceOptimizationRecord;


executionTime:number;


}



