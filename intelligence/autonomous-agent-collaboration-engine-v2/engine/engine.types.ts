
import type {

AutonomousAgentAgentCollaborationInput,

AutonomousAgentAgentCollaborationRecord

} from "../contracts";



export interface AutonomousAgentAgentCollaborationContext {


request:

AutonomousAgentAgentCollaborationInput;


history:

AutonomousAgentAgentCollaborationRecord[];


}



export interface AutonomousAgentAgentCollaborationResult {


record:

AutonomousAgentAgentCollaborationRecord;


executionTime:number;


}



