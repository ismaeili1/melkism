
import type {

AutonomousMetaMetaLearningInput,

AutonomousMetaMetaLearningRecord

} from "../contracts";



export interface AutonomousMetaMetaLearningContext {


request:

AutonomousMetaMetaLearningInput;


history:

AutonomousMetaMetaLearningRecord[];


}



export interface AutonomousMetaMetaLearningResult {


record:

AutonomousMetaMetaLearningRecord;


executionTime:number;


}



