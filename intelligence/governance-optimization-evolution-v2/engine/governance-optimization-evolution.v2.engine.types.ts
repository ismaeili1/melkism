
import type {

GovernanceOptimizationEvolutionV2InputContract,
GovernanceOptimizationEvolutionV2RecordContract

} from "../contracts";


export interface GovernanceOptimizationEvolutionV2Context {

request:GovernanceOptimizationEvolutionV2InputContract;

history:GovernanceOptimizationEvolutionV2RecordContract[];

}



export interface GovernanceOptimizationEvolutionV2Result {

record:GovernanceOptimizationEvolutionV2RecordContract;

executionTime:number;

}

