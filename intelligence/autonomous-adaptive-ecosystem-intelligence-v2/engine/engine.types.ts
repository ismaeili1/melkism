
import type {

AutonomousLearningAdaptiveIntelligenceInput,

AutonomousLearningAdaptiveIntelligenceRecord

} from "../contracts";



export interface AutonomousLearningAdaptiveIntelligenceContext {


request:

AutonomousLearningAdaptiveIntelligenceInput;


history:

AutonomousLearningAdaptiveIntelligenceRecord[];


}



export interface AutonomousLearningAdaptiveIntelligenceResult {


record:

AutonomousLearningAdaptiveIntelligenceRecord;


executionTime:number;


}



