
import type {

AutonomousCognitiveContextualFusionInput,

AutonomousCognitiveContextualFusionRecord

} from "../contracts";



export interface AutonomousCognitiveContextualFusionContext {


request:

AutonomousCognitiveContextualFusionInput;


history:

AutonomousCognitiveContextualFusionRecord[];


}



export interface AutonomousCognitiveContextualFusionResult {


record:

AutonomousCognitiveContextualFusionRecord;


executionTime:number;


}



