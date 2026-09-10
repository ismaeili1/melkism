
import type {

AutonomousGovernanceQualityAssuranceInput,

AutonomousGovernanceQualityAssuranceRecord

} from "../contracts";



export interface AutonomousGovernanceQualityAssuranceContext {


request:

AutonomousGovernanceQualityAssuranceInput;


history:

AutonomousGovernanceQualityAssuranceRecord[];


}



export interface AutonomousGovernanceQualityAssuranceResult {


record:

AutonomousGovernanceQualityAssuranceRecord;


executionTime:number;


}



