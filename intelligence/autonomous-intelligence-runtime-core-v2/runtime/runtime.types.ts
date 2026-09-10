
import type {

RuntimeEvent,

RuntimeExecutionRecord

} from "../contracts";



export interface RuntimeExecutionContext {


event:

RuntimeEvent;


history:

RuntimeExecutionRecord[];


}



export interface RuntimeExecutionResult {


record:

RuntimeExecutionRecord;


executionTime:number;


}



