
import type {

AutonomousStrategicScenarioForecastingInput,

AutonomousStrategicScenarioForecastingRecord

} from "../contracts";



export interface AutonomousStrategicScenarioForecastingContext {


request:

AutonomousStrategicScenarioForecastingInput;


history:

AutonomousStrategicScenarioForecastingRecord[];


}



export interface AutonomousStrategicScenarioForecastingResult {


record:

AutonomousStrategicScenarioForecastingRecord;


executionTime:number;


}



