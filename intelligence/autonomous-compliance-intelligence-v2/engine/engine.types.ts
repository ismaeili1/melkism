
import type {

AutonomousGovernanceComplianceIntelligenceInput,

AutonomousGovernanceComplianceIntelligenceRecord

} from "../contracts";



export interface AutonomousGovernanceComplianceIntelligenceContext {


request:

AutonomousGovernanceComplianceIntelligenceInput;


history:

AutonomousGovernanceComplianceIntelligenceRecord[];


}



export interface AutonomousGovernanceComplianceIntelligenceResult {


record:

AutonomousGovernanceComplianceIntelligenceRecord;


executionTime:number;


}



