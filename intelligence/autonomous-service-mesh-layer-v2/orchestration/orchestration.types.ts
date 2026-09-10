
import type {

IntelligenceService,

IntelligenceMessage

} from "../contracts";



export interface OrchestrationExecutionContext {


service:

IntelligenceService;


message:

IntelligenceMessage;


}



export interface OrchestrationExecutionResult {


service:

IntelligenceService;


executionTime:number;


}



