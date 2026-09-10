
import type {

AdaptiveSelfEvolutionIntelligenceOptimizationInput,

AdaptiveSelfEvolutionIntelligenceOptimizationRecord

} from "../contracts";


export interface AdaptiveSelfEvolutionIntelligenceOptimizationContext {


request:AdaptiveSelfEvolutionIntelligenceOptimizationInput;


history:AdaptiveSelfEvolutionIntelligenceOptimizationRecord[];

}



export interface AdaptiveSelfEvolutionIntelligenceOptimizationResult {


record:AdaptiveSelfEvolutionIntelligenceOptimizationRecord;


executionTime:number;


}

