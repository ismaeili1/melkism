
import type {

AutonomousGovernanceLearningGovernanceInput,

AutonomousGovernanceLearningGovernanceRecord

} from "../contracts";



export interface AutonomousGovernanceLearningGovernanceContext {


request:

AutonomousGovernanceLearningGovernanceInput;


history:

AutonomousGovernanceLearningGovernanceRecord[];


}



export interface AutonomousGovernanceLearningGovernanceResult {


record:

AutonomousGovernanceLearningGovernanceRecord;


executionTime:number;


}



