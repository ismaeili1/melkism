
import type {

AutonomousGovernanceResourceManagementInput,

AutonomousGovernanceResourceManagementRecord

} from "../contracts";



export interface AutonomousGovernanceResourceManagementContext {


request:

AutonomousGovernanceResourceManagementInput;


history:

AutonomousGovernanceResourceManagementRecord[];


}



export interface AutonomousGovernanceResourceManagementResult {


record:

AutonomousGovernanceResourceManagementRecord;


executionTime:number;


}



