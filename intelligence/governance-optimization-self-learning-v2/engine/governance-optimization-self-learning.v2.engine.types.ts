
import type {

GovernanceOptimizationSelfLearningV2InputContract,
GovernanceOptimizationSelfLearningV2RecordContract

} from "../contracts";



export interface GovernanceOptimizationSelfLearningV2Context {

request:GovernanceOptimizationSelfLearningV2InputContract;

history:GovernanceOptimizationSelfLearningV2RecordContract[];

}



export interface GovernanceOptimizationSelfLearningV2Result {

record:GovernanceOptimizationSelfLearningV2RecordContract;

executionTime:number;

}

