
import type {

AdaptiveSelfImprovementInputContract,
AdaptiveSelfImprovementRecordContract

} from "../contracts";



export interface AdaptiveSelfImprovementContext {

    request: AdaptiveSelfImprovementInputContract;

    history: AdaptiveSelfImprovementRecordContract[];

}



export interface AdaptiveSelfImprovementResult {

    record: AdaptiveSelfImprovementRecordContract;

    executionTime: number;

}


