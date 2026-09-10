
import type {

AutonomousLearningLearningInput,

AutonomousLearningLearningRecord

} from "../contracts";



export interface AutonomousLearningLearningContext {


request:

AutonomousLearningLearningInput;


history:

AutonomousLearningLearningRecord[];


}



export interface AutonomousLearningLearningResult {


record:

AutonomousLearningLearningRecord;


executionTime:number;


}



