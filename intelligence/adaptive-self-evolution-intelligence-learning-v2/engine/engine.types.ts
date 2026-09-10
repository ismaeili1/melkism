
import type {

AdaptiveSelfEvolutionIntelligenceLearningInput,

AdaptiveSelfEvolutionIntelligenceLearningRecord

} from "../contracts";


export interface AdaptiveSelfEvolutionIntelligenceLearningContext {


request:AdaptiveSelfEvolutionIntelligenceLearningInput;


history:AdaptiveSelfEvolutionIntelligenceLearningRecord[];

}



export interface AdaptiveSelfEvolutionIntelligenceLearningResult {


record:AdaptiveSelfEvolutionIntelligenceLearningRecord;


executionTime:number;


}

