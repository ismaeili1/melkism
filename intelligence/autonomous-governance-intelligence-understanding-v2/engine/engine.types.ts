
import type {

AutonomousGovernanceUnderstandingInput,

AutonomousGovernanceUnderstandingRecord

} from "../contracts";



export interface AutonomousGovernanceUnderstandingContext {


request:

AutonomousGovernanceUnderstandingInput;


history:

AutonomousGovernanceUnderstandingRecord[];


}



export interface AutonomousGovernanceUnderstandingResult {


record:

AutonomousGovernanceUnderstandingRecord;


executionTime:number;


}



