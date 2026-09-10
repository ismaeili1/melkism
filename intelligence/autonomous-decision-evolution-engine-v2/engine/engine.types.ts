
import type {

AutonomousReasoningDecisionEvolutionInput,

AutonomousReasoningDecisionEvolutionRecord

} from "../contracts";



export interface AutonomousReasoningDecisionEvolutionContext {


request:

AutonomousReasoningDecisionEvolutionInput;


history:

AutonomousReasoningDecisionEvolutionRecord[];


}



export interface AutonomousReasoningDecisionEvolutionResult {


record:

AutonomousReasoningDecisionEvolutionRecord;


executionTime:number;


}



