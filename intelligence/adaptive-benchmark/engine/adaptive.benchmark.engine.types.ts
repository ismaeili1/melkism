
import type {

AdaptiveBenchmarkInputContract,
AdaptiveBenchmarkRecordContract

} from "../contracts";


export interface AdaptiveBenchmarkContext {

request:AdaptiveBenchmarkInputContract;

history:AdaptiveBenchmarkRecordContract[];

}



export interface AdaptiveBenchmarkResult {

record:AdaptiveBenchmarkRecordContract;

executionTime:number;

}

