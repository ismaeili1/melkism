
import type {

AutonomousGovernanceLifecycleManagementInput,

AutonomousGovernanceLifecycleManagementRecord

} from "../contracts";



export interface AutonomousGovernanceLifecycleManagementContext {


request:

AutonomousGovernanceLifecycleManagementInput;


history:

AutonomousGovernanceLifecycleManagementRecord[];


}



export interface AutonomousGovernanceLifecycleManagementResult {


record:

AutonomousGovernanceLifecycleManagementRecord;


executionTime:number;


}



