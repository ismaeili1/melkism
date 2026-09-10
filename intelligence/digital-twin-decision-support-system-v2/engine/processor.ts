
import type {

DigitalTwinExecutionContext,

DigitalTwinExecutionResult

} from "../digital-twin/digital-twin.types";




export function processDigitalTwinDecisionSupport(

context:

DigitalTwinExecutionContext

):

DigitalTwinExecutionResult {



return {


twin:{


id:context.twin.id,


assetId:context.twin.assetId,


modelType:context.twin.modelType,


state:"initialized",


createdAt:new Date()


},


executionTime:0


};



}



