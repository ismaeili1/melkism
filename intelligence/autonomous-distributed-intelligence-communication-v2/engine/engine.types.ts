
import type {

AutonomousAgentDistributedCommunicationInput,

AutonomousAgentDistributedCommunicationRecord

} from "../contracts";



export interface AutonomousAgentDistributedCommunicationContext {


request:

AutonomousAgentDistributedCommunicationInput;


history:

AutonomousAgentDistributedCommunicationRecord[];


}



export interface AutonomousAgentDistributedCommunicationResult {


record:

AutonomousAgentDistributedCommunicationRecord;


executionTime:number;


}



