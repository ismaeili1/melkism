
import type {

AutonomousLearningContinuousImprovementInput,

AutonomousLearningContinuousImprovementRecord

} from "../contracts";



export interface AutonomousLearningContinuousImprovementContext {


request:

AutonomousLearningContinuousImprovementInput;


history:

AutonomousLearningContinuousImprovementRecord[];


}



export interface AutonomousLearningContinuousImprovementResult {


record:

AutonomousLearningContinuousImprovementRecord;


executionTime:number;


}



