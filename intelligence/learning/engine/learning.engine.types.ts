
import type {

LearningInputContract,
LearningRecordContract

} from "../contracts";



export interface LearningContext {

    request: LearningInputContract;

    history: LearningRecordContract[];

}



export interface LearningResult {

    record: LearningRecordContract;

    executionTime: number;

}



