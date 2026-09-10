
import type {

AutonomousLearningExperienceOptimizationInput,

AutonomousLearningExperienceOptimizationRecord

} from "../contracts";



export interface AutonomousLearningExperienceOptimizationContext {


request:

AutonomousLearningExperienceOptimizationInput;


history:

AutonomousLearningExperienceOptimizationRecord[];


}



export interface AutonomousLearningExperienceOptimizationResult {


record:

AutonomousLearningExperienceOptimizationRecord;


executionTime:number;


}



