
import type {

AutonomousGovernancePredictionInput,

AutonomousGovernancePredictionRecord

} from "../contracts";



export interface AutonomousGovernancePredictionContext {


request:

AutonomousGovernancePredictionInput;


history:

AutonomousGovernancePredictionRecord[];


}



export interface AutonomousGovernancePredictionResult {


record:

AutonomousGovernancePredictionRecord;


executionTime:number;


}



