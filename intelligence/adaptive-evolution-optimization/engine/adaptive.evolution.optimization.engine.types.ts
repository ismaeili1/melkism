
import type {

AdaptiveEvolutionOptimizationInputContract,
AdaptiveEvolutionOptimizationRecordContract

} from "../contracts";


export interface AdaptiveEvolutionOptimizationContext {

request:AdaptiveEvolutionOptimizationInputContract;

history:AdaptiveEvolutionOptimizationRecordContract[];

}


export interface AdaptiveEvolutionOptimizationResult {

record:AdaptiveEvolutionOptimizationRecordContract;

executionTime:number;

}

