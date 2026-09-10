
import type {

GovernanceAutonomousLearningInput,

GovernanceAutonomousLearningRecord

} from "../contracts";



export interface GovernanceAutonomousLearningContext {


request:GovernanceAutonomousLearningInput;


history:GovernanceAutonomousLearningRecord[];


}



export interface GovernanceAutonomousLearningResult {


record:GovernanceAutonomousLearningRecord;


executionTime:number;


}



