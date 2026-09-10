
import type {

AdaptiveSelfEvolutionIntelligenceImprovementInput,

AdaptiveSelfEvolutionIntelligenceImprovementRecord

} from "../contracts";


export interface AdaptiveSelfEvolutionIntelligenceImprovementContext {


request:AdaptiveSelfEvolutionIntelligenceImprovementInput;


history:AdaptiveSelfEvolutionIntelligenceImprovementRecord[];

}



export interface AdaptiveSelfEvolutionIntelligenceImprovementResult {


record:AdaptiveSelfEvolutionIntelligenceImprovementRecord;


executionTime:number;


}

