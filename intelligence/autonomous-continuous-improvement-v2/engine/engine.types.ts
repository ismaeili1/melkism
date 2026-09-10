
import type {

AutonomousEvolutionContinuousImprovementInput,

AutonomousEvolutionContinuousImprovementRecord

} from "../contracts";



export interface AutonomousEvolutionContinuousImprovementContext {


request:

AutonomousEvolutionContinuousImprovementInput;


history:

AutonomousEvolutionContinuousImprovementRecord[];


}



export interface AutonomousEvolutionContinuousImprovementResult {


record:

AutonomousEvolutionContinuousImprovementRecord;


executionTime:number;


}



