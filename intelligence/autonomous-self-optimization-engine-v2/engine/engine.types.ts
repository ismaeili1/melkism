
import type {

AutonomousEvolutionSelfOptimizationInput,

AutonomousEvolutionSelfOptimizationRecord

} from "../contracts";



export interface AutonomousEvolutionSelfOptimizationContext {


request:

AutonomousEvolutionSelfOptimizationInput;


history:

AutonomousEvolutionSelfOptimizationRecord[];


}



export interface AutonomousEvolutionSelfOptimizationResult {


record:

AutonomousEvolutionSelfOptimizationRecord;


executionTime:number;


}



