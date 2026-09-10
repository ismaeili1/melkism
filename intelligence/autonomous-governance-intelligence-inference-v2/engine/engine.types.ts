
import type {

AutonomousGovernanceInferenceInput,

AutonomousGovernanceInferenceRecord

} from "../contracts";



export interface AutonomousGovernanceInferenceContext {


request:

AutonomousGovernanceInferenceInput;


history:

AutonomousGovernanceInferenceRecord[];


}



export interface AutonomousGovernanceInferenceResult {


record:

AutonomousGovernanceInferenceRecord;


executionTime:number;


}



