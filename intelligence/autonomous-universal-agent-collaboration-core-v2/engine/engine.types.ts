
import type {

AutonomousAgentUniversalAgentCollaborationInput,

AutonomousAgentUniversalAgentCollaborationRecord

} from "../contracts";



export interface AutonomousAgentUniversalAgentCollaborationContext {


request:

AutonomousAgentUniversalAgentCollaborationInput;


history:

AutonomousAgentUniversalAgentCollaborationRecord[];


}



export interface AutonomousAgentUniversalAgentCollaborationResult {


record:

AutonomousAgentUniversalAgentCollaborationRecord;


executionTime:number;


}



