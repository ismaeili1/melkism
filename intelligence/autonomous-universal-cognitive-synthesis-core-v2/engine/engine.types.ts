
import type {

CognitiveSynthesisCognitiveSynthesisInput,

CognitiveSynthesisCognitiveSynthesisRecord

} from "../contracts";



export interface CognitiveSynthesisCognitiveSynthesisContext {


request:

CognitiveSynthesisCognitiveSynthesisInput;


history:

CognitiveSynthesisCognitiveSynthesisRecord[];


}



export interface CognitiveSynthesisCognitiveSynthesisResult {


record:

CognitiveSynthesisCognitiveSynthesisRecord;


executionTime:number;


}



