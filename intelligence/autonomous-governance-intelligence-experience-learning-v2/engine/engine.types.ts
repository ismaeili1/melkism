
import type {

AutonomousGovernanceExperienceLearningInput,

AutonomousGovernanceExperienceLearningRecord

} from "../contracts";



export interface AutonomousGovernanceExperienceLearningContext {


request:

AutonomousGovernanceExperienceLearningInput;


history:

AutonomousGovernanceExperienceLearningRecord[];


}



export interface AutonomousGovernanceExperienceLearningResult {


record:

AutonomousGovernanceExperienceLearningRecord;


executionTime:number;


}



