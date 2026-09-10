
import type {

AutonomousGovernanceCommunicationInput,

AutonomousGovernanceCommunicationRecord

} from "../contracts";



export interface AutonomousGovernanceCommunicationContext {


request:

AutonomousGovernanceCommunicationInput;


history:

AutonomousGovernanceCommunicationRecord[];


}



export interface AutonomousGovernanceCommunicationResult {


record:

AutonomousGovernanceCommunicationRecord;


executionTime:number;


}



