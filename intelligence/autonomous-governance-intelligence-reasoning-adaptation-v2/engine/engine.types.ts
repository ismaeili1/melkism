
import type {

AutonomousGovernanceReasoningAdaptationInput,

AutonomousGovernanceReasoningAdaptationRecord

} from "../contracts";



export interface AutonomousGovernanceReasoningAdaptationContext {


request:

AutonomousGovernanceReasoningAdaptationInput;


history:

AutonomousGovernanceReasoningAdaptationRecord[];


}



export interface AutonomousGovernanceReasoningAdaptationResult {


record:

AutonomousGovernanceReasoningAdaptationRecord;


executionTime:number;


}



