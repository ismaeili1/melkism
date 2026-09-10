
import type {

AdaptiveSelfEvolutionLearningInput,
AdaptiveSelfEvolutionLearningRecord

} from "../contracts";


export interface Context {

request:AdaptiveSelfEvolutionLearningInput;

history:AdaptiveSelfEvolutionLearningRecord[];

}


export interface Result {

record:AdaptiveSelfEvolutionLearningRecord;

executionTime:number;

}

