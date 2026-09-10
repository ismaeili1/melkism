
import type {

AutonomousGovernanceInferenceEvolutionInput,

AutonomousGovernanceInferenceEvolutionRecord

} from "../contracts";



export interface AutonomousGovernanceInferenceEvolutionContext {


request:

AutonomousGovernanceInferenceEvolutionInput;


history:

AutonomousGovernanceInferenceEvolutionRecord[];


}



export interface AutonomousGovernanceInferenceEvolutionResult {


record:

AutonomousGovernanceInferenceEvolutionRecord;


executionTime:number;


}



