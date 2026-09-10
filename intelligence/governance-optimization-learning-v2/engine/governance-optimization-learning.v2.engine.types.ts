
import type {

GovernanceOptimizationLearningV2InputContract,
GovernanceOptimizationLearningV2RecordContract

} from "../contracts";



export interface GovernanceOptimizationLearningV2Context {

request:GovernanceOptimizationLearningV2InputContract;

history:GovernanceOptimizationLearningV2RecordContract[];

}



export interface GovernanceOptimizationLearningV2Result {

record:GovernanceOptimizationLearningV2RecordContract;

executionTime:number;

}

