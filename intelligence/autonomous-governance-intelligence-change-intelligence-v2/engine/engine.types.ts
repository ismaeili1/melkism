
import type {

AutonomousGovernanceChangeIntelligenceInput,

AutonomousGovernanceChangeIntelligenceRecord

} from "../contracts";



export interface AutonomousGovernanceChangeIntelligenceContext {


request:

AutonomousGovernanceChangeIntelligenceInput;


history:

AutonomousGovernanceChangeIntelligenceRecord[];


}



export interface AutonomousGovernanceChangeIntelligenceResult {


record:

AutonomousGovernanceChangeIntelligenceRecord;


executionTime:number;


}



