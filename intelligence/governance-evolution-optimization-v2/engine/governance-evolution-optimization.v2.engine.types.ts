
import type {

GovernanceEvolutionOptimizationV2InputContract,
GovernanceEvolutionOptimizationV2RecordContract

} from "../contracts";


export interface GovernanceEvolutionOptimizationV2Context {

request:GovernanceEvolutionOptimizationV2InputContract;

history:GovernanceEvolutionOptimizationV2RecordContract[];

}



export interface GovernanceEvolutionOptimizationV2Result {

record:GovernanceEvolutionOptimizationV2RecordContract;

executionTime:number;

}

