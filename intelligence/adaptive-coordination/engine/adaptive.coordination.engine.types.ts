
import type {

AdaptiveCoordinationInputContract,
AdaptiveCoordinationRecordContract

} from "../contracts";


export interface AdaptiveCoordinationContext {

request:AdaptiveCoordinationInputContract;

history:AdaptiveCoordinationRecordContract[];

}



export interface AdaptiveCoordinationResult {

record:AdaptiveCoordinationRecordContract;

executionTime:number;

}

