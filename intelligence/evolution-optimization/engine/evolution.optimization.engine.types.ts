
import type {

EvolutionOptimizationInputContract,
EvolutionOptimizationRecordContract

} from "../contracts";



export interface EvolutionOptimizationContext {

    request: EvolutionOptimizationInputContract;

    history: EvolutionOptimizationRecordContract[];

}



export interface EvolutionOptimizationResult {

    record: EvolutionOptimizationRecordContract;

    executionTime: number;

}


