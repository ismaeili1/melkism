
import type {

AdaptiveSelfEvolutionIntelligenceInput,
AdaptiveSelfEvolutionIntelligenceRecord

} from "../contracts";


export interface Context {

request:AdaptiveSelfEvolutionIntelligenceInput;

history:AdaptiveSelfEvolutionIntelligenceRecord[];

}


export interface Result {

record:AdaptiveSelfEvolutionIntelligenceRecord;

executionTime:number;

}

