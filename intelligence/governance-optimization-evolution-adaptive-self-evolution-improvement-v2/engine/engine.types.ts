
import type {

AdaptiveSelfEvolutionImprovementInput,
AdaptiveSelfEvolutionImprovementRecord

} from "../contracts";


export interface Context {

request:AdaptiveSelfEvolutionImprovementInput;

history:AdaptiveSelfEvolutionImprovementRecord[];

}


export interface Result {

record:AdaptiveSelfEvolutionImprovementRecord;

executionTime:number;

}

