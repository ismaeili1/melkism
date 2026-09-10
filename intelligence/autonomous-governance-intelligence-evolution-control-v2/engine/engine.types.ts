
import type {

AutonomousGovernanceEvolutionControlInput,

AutonomousGovernanceEvolutionControlRecord

} from "../contracts";



export interface AutonomousGovernanceEvolutionControlContext {


request:

AutonomousGovernanceEvolutionControlInput;


history:

AutonomousGovernanceEvolutionControlRecord[];


}



export interface AutonomousGovernanceEvolutionControlResult {


record:

AutonomousGovernanceEvolutionControlRecord;


executionTime:number;


}



