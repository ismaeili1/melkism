
import type {

AutonomousPerceptionMultimodalFusionInput,

AutonomousPerceptionMultimodalFusionRecord

} from "../contracts";



export interface AutonomousPerceptionMultimodalFusionContext {


request:

AutonomousPerceptionMultimodalFusionInput;


history:

AutonomousPerceptionMultimodalFusionRecord[];


}



export interface AutonomousPerceptionMultimodalFusionResult {


record:

AutonomousPerceptionMultimodalFusionRecord;


executionTime:number;


}



