
import type {

IntelligencePlatformInput,

IntelligencePlatformRecord

} from "../contracts";



export interface IntelligencePlatformContext {


request:

IntelligencePlatformInput;


history:

IntelligencePlatformRecord[];


}





export interface IntelligencePlatformResult {


record:

IntelligencePlatformRecord;


executionTime:number;


}


