
import type {

AutonomousAdaptiveEnvironmentAdaptationInput,

AutonomousAdaptiveEnvironmentAdaptationRecord

} from "../contracts";



export interface AutonomousAdaptiveEnvironmentAdaptationContext {


request:

AutonomousAdaptiveEnvironmentAdaptationInput;


history:

AutonomousAdaptiveEnvironmentAdaptationRecord[];


}



export interface AutonomousAdaptiveEnvironmentAdaptationResult {


record:

AutonomousAdaptiveEnvironmentAdaptationRecord;


executionTime:number;


}



