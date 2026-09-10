
import type {

DigitalTwinExecutionContext,

DigitalTwinExecutionResult

} from "../twin/twin.types";




export function processBuiltEnvironmentSimulation(

context:

DigitalTwinExecutionContext

):

DigitalTwinExecutionResult {



return {


status:"simulated",


confidence:0,


executionTime:0


};



}



