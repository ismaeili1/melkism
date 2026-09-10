
import type {

AutonomousMetaContinuousIntelligenceOptimizationInput,

AutonomousMetaContinuousIntelligenceOptimizationRecord

} from "../contracts";



export interface AutonomousMetaContinuousIntelligenceOptimizationContext {


request:

AutonomousMetaContinuousIntelligenceOptimizationInput;


history:

AutonomousMetaContinuousIntelligenceOptimizationRecord[];


}



export interface AutonomousMetaContinuousIntelligenceOptimizationResult {


record:

AutonomousMetaContinuousIntelligenceOptimizationRecord;


executionTime:number;


}



