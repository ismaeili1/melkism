
import type {

GovernanceOptimizationIntelligenceV2InputContract,
GovernanceOptimizationIntelligenceV2RecordContract

} from "../contracts";


export interface GovernanceOptimizationIntelligenceV2Context {

request:GovernanceOptimizationIntelligenceV2InputContract;

history:GovernanceOptimizationIntelligenceV2RecordContract[];

}


export interface GovernanceOptimizationIntelligenceV2Result {

record:GovernanceOptimizationIntelligenceV2RecordContract;

executionTime:number;

}

