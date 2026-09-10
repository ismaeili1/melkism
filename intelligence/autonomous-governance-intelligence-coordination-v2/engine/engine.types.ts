
import type {

AutonomousGovernanceCoordinationInput,

AutonomousGovernanceCoordinationRecord

} from "../contracts";



export interface AutonomousGovernanceCoordinationContext {


request:

AutonomousGovernanceCoordinationInput;


history:

AutonomousGovernanceCoordinationRecord[];


}



export interface AutonomousGovernanceCoordinationResult {


record:

AutonomousGovernanceCoordinationRecord;


executionTime:number;


}



