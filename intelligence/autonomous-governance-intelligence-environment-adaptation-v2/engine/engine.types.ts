
import type {

AutonomousGovernanceEnvironmentAdaptationInput,

AutonomousGovernanceEnvironmentAdaptationRecord

} from "../contracts";



export interface AutonomousGovernanceEnvironmentAdaptationContext {


request:

AutonomousGovernanceEnvironmentAdaptationInput;


history:

AutonomousGovernanceEnvironmentAdaptationRecord[];


}



export interface AutonomousGovernanceEnvironmentAdaptationResult {


record:

AutonomousGovernanceEnvironmentAdaptationRecord;


executionTime:number;


}



