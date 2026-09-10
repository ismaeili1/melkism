
import type {

AutonomousCognitiveDecisionIntelligenceInput,

AutonomousCognitiveDecisionIntelligenceRecord

} from "../contracts";



export interface AutonomousCognitiveDecisionIntelligenceContext {


request:

AutonomousCognitiveDecisionIntelligenceInput;


history:

AutonomousCognitiveDecisionIntelligenceRecord[];


}



export interface AutonomousCognitiveDecisionIntelligenceResult {


record:

AutonomousCognitiveDecisionIntelligenceRecord;


executionTime:number;


}



