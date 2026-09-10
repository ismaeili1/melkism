
import type {

AutonomousGovernanceSelfLearningInput,

AutonomousGovernanceSelfLearningRecord

} from "../contracts";



export interface AutonomousGovernanceSelfLearningContext {


request:

AutonomousGovernanceSelfLearningInput;


history:

AutonomousGovernanceSelfLearningRecord[];


}



export interface AutonomousGovernanceSelfLearningResult {


record:

AutonomousGovernanceSelfLearningRecord;


executionTime:number;


}



