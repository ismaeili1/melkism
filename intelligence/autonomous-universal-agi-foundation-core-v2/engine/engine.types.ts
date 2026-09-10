
import type {

AGIAGIFoundationInput,

AGIAGIFoundationRecord

} from "../contracts";



export interface AGIAGIFoundationContext {


request:

AGIAGIFoundationInput;


history:

AGIAGIFoundationRecord[];


}



export interface AGIAGIFoundationResult {


record:

AGIAGIFoundationRecord;


executionTime:number;


}



