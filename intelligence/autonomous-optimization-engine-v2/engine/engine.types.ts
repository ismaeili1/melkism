
import type {

AutonomousAdaptiveOptimizationEngineInput,

AutonomousAdaptiveOptimizationEngineRecord

} from "../contracts";



export interface AutonomousAdaptiveOptimizationEngineContext {


request:

AutonomousAdaptiveOptimizationEngineInput;


history:

AutonomousAdaptiveOptimizationEngineRecord[];


}



export interface AutonomousAdaptiveOptimizationEngineResult {


record:

AutonomousAdaptiveOptimizationEngineRecord;


executionTime:number;


}



