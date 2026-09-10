
import type {

SelfLearningInputContract,
SelfLearningRecordContract

} from "../contracts";



export interface SelfLearningContext {

    request: SelfLearningInputContract;

    history: SelfLearningRecordContract[];

}



export interface SelfLearningResult {

    record: SelfLearningRecordContract;

    executionTime: number;

}


