
import type {

AutonomousCognitiveOSCognitiveAdaptationInput,

AutonomousCognitiveOSCognitiveAdaptationRecord

} from "../contracts";



export interface AutonomousCognitiveOSCognitiveAdaptationContext {


request:

AutonomousCognitiveOSCognitiveAdaptationInput;


history:

AutonomousCognitiveOSCognitiveAdaptationRecord[];


}



export interface AutonomousCognitiveOSCognitiveAdaptationResult {


record:

AutonomousCognitiveOSCognitiveAdaptationRecord;


executionTime:number;


}



