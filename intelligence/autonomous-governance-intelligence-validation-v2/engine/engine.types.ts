
import type {

AutonomousGovernanceValidationInput,

AutonomousGovernanceValidationRecord

} from "../contracts";



export interface AutonomousGovernanceValidationContext {


request:

AutonomousGovernanceValidationInput;


history:

AutonomousGovernanceValidationRecord[];


}



export interface AutonomousGovernanceValidationResult {


record:

AutonomousGovernanceValidationRecord;


executionTime:number;


}



