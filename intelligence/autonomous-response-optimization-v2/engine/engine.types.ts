
import type {

AutonomousDecisionResponseOptimizationInput,

AutonomousDecisionResponseOptimizationRecord

} from "../contracts";



export interface AutonomousDecisionResponseOptimizationContext {


request:

AutonomousDecisionResponseOptimizationInput;


history:

AutonomousDecisionResponseOptimizationRecord[];


}



export interface AutonomousDecisionResponseOptimizationResult {


record:

AutonomousDecisionResponseOptimizationRecord;


executionTime:number;


}



