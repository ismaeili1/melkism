
import type {

DigitalTwinRecord,

TwinSimulationEvent

} from "../contracts";



export interface DigitalTwinExecutionContext {


twin:

DigitalTwinRecord;


event:

TwinSimulationEvent;


}



export interface DigitalTwinExecutionResult {


twin:

DigitalTwinRecord;


executionTime:number;


}



