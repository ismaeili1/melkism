
import type {

AutonomousGovernanceEvolutionGovernanceInput,

AutonomousGovernanceEvolutionGovernanceRecord

} from "../contracts";



export interface AutonomousGovernanceEvolutionGovernanceContext {


request:

AutonomousGovernanceEvolutionGovernanceInput;


history:

AutonomousGovernanceEvolutionGovernanceRecord[];


}



export interface AutonomousGovernanceEvolutionGovernanceResult {


record:

AutonomousGovernanceEvolutionGovernanceRecord;


executionTime:number;


}



