
import type {

AdaptiveSelfEvolutionOptimizationInput,
AdaptiveSelfEvolutionOptimizationRecord

} from "../contracts";


export interface Context {

request:AdaptiveSelfEvolutionOptimizationInput;

history:AdaptiveSelfEvolutionOptimizationRecord[];

}


export interface Result {

record:AdaptiveSelfEvolutionOptimizationRecord;

executionTime:number;

}

