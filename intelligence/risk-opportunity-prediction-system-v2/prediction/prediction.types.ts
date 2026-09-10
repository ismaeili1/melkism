
import type {

PredictionRecord,

ForecastSignal

} from "../contracts";



export interface PredictionExecutionContext {


record:

PredictionRecord;


signals:

ForecastSignal[];


}



export interface PredictionExecutionResult {


prediction:

PredictionRecord;


executionTime:number;


}



