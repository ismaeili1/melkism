
import type {

AutonomousPerceptionPredictiveIntelligenceInput,

AutonomousPerceptionPredictiveIntelligenceRecord

} from "../contracts";



export interface AutonomousPerceptionPredictiveIntelligenceContext {


request:

AutonomousPerceptionPredictiveIntelligenceInput;


history:

AutonomousPerceptionPredictiveIntelligenceRecord[];


}



export interface AutonomousPerceptionPredictiveIntelligenceResult {


record:

AutonomousPerceptionPredictiveIntelligenceRecord;


executionTime:number;


}



