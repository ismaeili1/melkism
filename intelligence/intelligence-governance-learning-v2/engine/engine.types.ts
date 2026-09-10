
import type {

IntelligenceGovernanceLearningInput,

IntelligenceGovernanceLearningRecord

} from "../contracts";



export interface IntelligenceGovernanceLearningContext {


request:IntelligenceGovernanceLearningInput;


history:IntelligenceGovernanceLearningRecord[];


}



export interface IntelligenceGovernanceLearningResult {


record:IntelligenceGovernanceLearningRecord;


executionTime:number;


}


