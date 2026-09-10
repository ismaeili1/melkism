
import type {

AutonomousPerceptionAnalyticsEngineInput,

AutonomousPerceptionAnalyticsEngineRecord

} from "../contracts";



export interface AutonomousPerceptionAnalyticsEngineContext {


request:

AutonomousPerceptionAnalyticsEngineInput;


history:

AutonomousPerceptionAnalyticsEngineRecord[];


}



export interface AutonomousPerceptionAnalyticsEngineResult {


record:

AutonomousPerceptionAnalyticsEngineRecord;


executionTime:number;


}



