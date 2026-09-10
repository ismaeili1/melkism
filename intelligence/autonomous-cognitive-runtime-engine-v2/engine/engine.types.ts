
import type {

CognitiveOSCognitiveRuntimeInput,

CognitiveOSCognitiveRuntimeRecord

} from "../contracts";



export interface CognitiveOSCognitiveRuntimeContext {


request:

CognitiveOSCognitiveRuntimeInput;


history:

CognitiveOSCognitiveRuntimeRecord[];


}



export interface CognitiveOSCognitiveRuntimeResult {


record:

CognitiveOSCognitiveRuntimeRecord;


executionTime:number;


}



