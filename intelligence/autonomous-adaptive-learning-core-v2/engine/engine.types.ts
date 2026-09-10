
import type {

AutonomousAdaptiveLearningCoreInput,

AutonomousAdaptiveLearningCoreRecord

} from "../contracts";



export interface AutonomousAdaptiveLearningCoreContext {


request:

AutonomousAdaptiveLearningCoreInput;


history:

AutonomousAdaptiveLearningCoreRecord[];


}



export interface AutonomousAdaptiveLearningCoreResult {


record:

AutonomousAdaptiveLearningCoreRecord;


executionTime:number;


}



