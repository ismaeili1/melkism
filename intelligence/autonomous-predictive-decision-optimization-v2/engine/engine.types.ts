
import type {

AutonomousDecisionPredictiveOptimizationInput,

AutonomousDecisionPredictiveOptimizationRecord

} from "../contracts";



export interface AutonomousDecisionPredictiveOptimizationContext {


request:

AutonomousDecisionPredictiveOptimizationInput;


history:

AutonomousDecisionPredictiveOptimizationRecord[];


}



export interface AutonomousDecisionPredictiveOptimizationResult {


record:

AutonomousDecisionPredictiveOptimizationRecord;


executionTime:number;


}



