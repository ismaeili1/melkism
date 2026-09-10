
import type {

AutonomousGovernanceAdaptationInput,

AutonomousGovernanceAdaptationRecord

} from "../contracts";



export interface AutonomousGovernanceAdaptationContext {


request:

AutonomousGovernanceAdaptationInput;


history:

AutonomousGovernanceAdaptationRecord[];


}



export interface AutonomousGovernanceAdaptationResult {


record:

AutonomousGovernanceAdaptationRecord;


executionTime:number;


}



