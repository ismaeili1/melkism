
import type {

AutonomousGovernanceLearningMemoryInput,

AutonomousGovernanceLearningMemoryRecord

} from "../contracts";



export interface AutonomousGovernanceLearningMemoryContext {


request:

AutonomousGovernanceLearningMemoryInput;


history:

AutonomousGovernanceLearningMemoryRecord[];


}



export interface AutonomousGovernanceLearningMemoryResult {


record:

AutonomousGovernanceLearningMemoryRecord;


executionTime:number;


}



