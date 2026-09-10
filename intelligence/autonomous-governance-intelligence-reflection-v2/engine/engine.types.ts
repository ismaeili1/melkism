
import type {

AutonomousGovernanceReflectionInput,

AutonomousGovernanceReflectionRecord

} from "../contracts";



export interface AutonomousGovernanceReflectionContext {


request:

AutonomousGovernanceReflectionInput;


history:

AutonomousGovernanceReflectionRecord[];


}



export interface AutonomousGovernanceReflectionResult {


record:

AutonomousGovernanceReflectionRecord;


executionTime:number;


}



