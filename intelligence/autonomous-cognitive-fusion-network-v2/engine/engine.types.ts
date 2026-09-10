
import type {

CognitiveSynthesisCognitiveFusionNetworkInput,

CognitiveSynthesisCognitiveFusionNetworkRecord

} from "../contracts";



export interface CognitiveSynthesisCognitiveFusionNetworkContext {


request:

CognitiveSynthesisCognitiveFusionNetworkInput;


history:

CognitiveSynthesisCognitiveFusionNetworkRecord[];


}



export interface CognitiveSynthesisCognitiveFusionNetworkResult {


record:

CognitiveSynthesisCognitiveFusionNetworkRecord;


executionTime:number;


}



