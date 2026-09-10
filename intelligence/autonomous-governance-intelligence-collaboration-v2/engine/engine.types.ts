
import type {

AutonomousGovernanceCollaborationInput,

AutonomousGovernanceCollaborationRecord

} from "../contracts";



export interface AutonomousGovernanceCollaborationContext {


request:

AutonomousGovernanceCollaborationInput;


history:

AutonomousGovernanceCollaborationRecord[];


}



export interface AutonomousGovernanceCollaborationResult {


record:

AutonomousGovernanceCollaborationRecord;


executionTime:number;


}



