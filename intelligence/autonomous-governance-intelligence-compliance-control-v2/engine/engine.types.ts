
import type {

AutonomousGovernanceComplianceControlInput,

AutonomousGovernanceComplianceControlRecord

} from "../contracts";



export interface AutonomousGovernanceComplianceControlContext {


request:

AutonomousGovernanceComplianceControlInput;


history:

AutonomousGovernanceComplianceControlRecord[];


}



export interface AutonomousGovernanceComplianceControlResult {


record:

AutonomousGovernanceComplianceControlRecord;


executionTime:number;


}



