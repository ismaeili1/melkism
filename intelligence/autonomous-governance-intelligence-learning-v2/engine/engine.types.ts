
import type {

AutonomousGovernanceIntelligenceLearningInput,

AutonomousGovernanceIntelligenceLearningRecord

} from "../contracts";



export interface AutonomousGovernanceIntelligenceLearningContext {


request:AutonomousGovernanceIntelligenceLearningInput;


history:AutonomousGovernanceIntelligenceLearningRecord[];


}



export interface AutonomousGovernanceIntelligenceLearningResult {


record:AutonomousGovernanceIntelligenceLearningRecord;


executionTime:number;


}



