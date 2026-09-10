
import type {

AutonomousGovernanceSelfManagementInput,

AutonomousGovernanceSelfManagementRecord

} from "../contracts";



export interface AutonomousGovernanceSelfManagementContext {


request:

AutonomousGovernanceSelfManagementInput;


history:

AutonomousGovernanceSelfManagementRecord[];


}



export interface AutonomousGovernanceSelfManagementResult {


record:

AutonomousGovernanceSelfManagementRecord;


executionTime:number;


}



