
import type {

AdaptiveSelfLearningInputContract,
AdaptiveSelfLearningRecordContract

} from "../contracts";



export interface AdaptiveSelfLearningContext {

    request: AdaptiveSelfLearningInputContract;

    history: AdaptiveSelfLearningRecordContract[];

}



export interface AdaptiveSelfLearningResult {

    record: AdaptiveSelfLearningRecordContract;

    executionTime: number;

}


