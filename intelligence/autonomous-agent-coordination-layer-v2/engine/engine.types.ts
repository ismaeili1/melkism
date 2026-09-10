
import type {

AutonomousAgentAgentCoordinationInput,

AutonomousAgentAgentCoordinationRecord

} from "../contracts";



export interface AutonomousAgentAgentCoordinationContext {


request:

AutonomousAgentAgentCoordinationInput;


history:

AutonomousAgentAgentCoordinationRecord[];


}



export interface AutonomousAgentAgentCoordinationResult {


record:

AutonomousAgentAgentCoordinationRecord;


executionTime:number;


}



