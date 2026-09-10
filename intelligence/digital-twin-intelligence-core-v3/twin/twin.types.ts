
import type {

DigitalTwinAsset,

DigitalTwinState,

DigitalTwinEvent

} from "../contracts";



export interface DigitalTwinExecutionContext {


asset:

DigitalTwinAsset;


state:

DigitalTwinState;


event:

DigitalTwinEvent;


}



export interface DigitalTwinExecutionResult {


status:string;


confidence:number;


executionTime:number;


}



