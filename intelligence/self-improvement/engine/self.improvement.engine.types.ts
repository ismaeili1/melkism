
import type {

SelfImprovementInputContract,
SelfImprovementRecordContract

} from "../contracts";



export interface SelfImprovementContext {

    request: SelfImprovementInputContract;

    previousResults: SelfImprovementRecordContract[];

}



export interface SelfImprovementResult {

    record: SelfImprovementRecordContract;

    executionTime: number;

}


