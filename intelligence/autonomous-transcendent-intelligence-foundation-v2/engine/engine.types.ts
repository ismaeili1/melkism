
import type {

TranscendentInput,

TranscendentRecord

} from "../contracts";



export interface TranscendentContext {


request:

TranscendentInput;


history:

TranscendentRecord[];


}




export interface TranscendentResult {


record:

TranscendentRecord;


executionTime:number;


}



