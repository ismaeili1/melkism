
import type {

AutonomousGovernanceCollectiveReasoningInput,

AutonomousGovernanceCollectiveReasoningRecord

} from "../contracts";



export interface AutonomousGovernanceCollectiveReasoningContext {


request:

AutonomousGovernanceCollectiveReasoningInput;


history:

AutonomousGovernanceCollectiveReasoningRecord[];


}



export interface AutonomousGovernanceCollectiveReasoningResult {


record:

AutonomousGovernanceCollectiveReasoningRecord;


executionTime:number;


}



