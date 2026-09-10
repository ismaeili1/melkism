
import type {

AutonomousGovernanceContextSharingInput,

AutonomousGovernanceContextSharingRecord

} from "../contracts";



export interface AutonomousGovernanceContextSharingContext {


request:

AutonomousGovernanceContextSharingInput;


history:

AutonomousGovernanceContextSharingRecord[];


}



export interface AutonomousGovernanceContextSharingResult {


record:

AutonomousGovernanceContextSharingRecord;


executionTime:number;


}



