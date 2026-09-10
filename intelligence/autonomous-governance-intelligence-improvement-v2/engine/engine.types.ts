
import type {

AutonomousGovernanceIntelligenceImprovementInput,

AutonomousGovernanceIntelligenceImprovementRecord

} from "../contracts";



export interface AutonomousGovernanceIntelligenceImprovementContext {


request:AutonomousGovernanceIntelligenceImprovementInput;


history:AutonomousGovernanceIntelligenceImprovementRecord[];


}



export interface AutonomousGovernanceIntelligenceImprovementResult {


record:AutonomousGovernanceIntelligenceImprovementRecord;


executionTime:number;


}



