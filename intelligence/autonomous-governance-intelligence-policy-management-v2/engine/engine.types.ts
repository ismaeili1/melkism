
import type {

AutonomousGovernancePolicyManagementInput,

AutonomousGovernancePolicyManagementRecord

} from "../contracts";



export interface AutonomousGovernancePolicyManagementContext {


request:

AutonomousGovernancePolicyManagementInput;


history:

AutonomousGovernancePolicyManagementRecord[];


}



export interface AutonomousGovernancePolicyManagementResult {


record:

AutonomousGovernancePolicyManagementRecord;


executionTime:number;


}



