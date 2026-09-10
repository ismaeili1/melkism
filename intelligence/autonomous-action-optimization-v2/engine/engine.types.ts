
import type {

AutonomousDecisionActionOptimizationInput,

AutonomousDecisionActionOptimizationRecord

} from "../contracts";



export interface AutonomousDecisionActionOptimizationContext {


request:

AutonomousDecisionActionOptimizationInput;


history:

AutonomousDecisionActionOptimizationRecord[];


}



export interface AutonomousDecisionActionOptimizationResult {


record:

AutonomousDecisionActionOptimizationRecord;


executionTime:number;


}



