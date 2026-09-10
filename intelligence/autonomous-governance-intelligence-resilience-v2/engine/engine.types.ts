
import type {

AutonomousGovernanceResilienceInput,

AutonomousGovernanceResilienceRecord

} from "../contracts";



export interface AutonomousGovernanceResilienceContext {


request:

AutonomousGovernanceResilienceInput;


history:

AutonomousGovernanceResilienceRecord[];


}



export interface AutonomousGovernanceResilienceResult {


record:

AutonomousGovernanceResilienceRecord;


executionTime:number;


}



