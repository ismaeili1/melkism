
import type {

AutonomousGovernanceDecisionEvolutionInput,

AutonomousGovernanceDecisionEvolutionRecord

} from "../contracts";



export interface AutonomousGovernanceDecisionEvolutionContext {


request:

AutonomousGovernanceDecisionEvolutionInput;


history:

AutonomousGovernanceDecisionEvolutionRecord[];


}



export interface AutonomousGovernanceDecisionEvolutionResult {


record:

AutonomousGovernanceDecisionEvolutionRecord;


executionTime:number;


}



