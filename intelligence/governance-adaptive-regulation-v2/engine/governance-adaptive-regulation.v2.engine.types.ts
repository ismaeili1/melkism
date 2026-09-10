
import type {

GovernanceAdaptiveRegulationV2InputContract,
GovernanceAdaptiveRegulationV2RecordContract

} from "../contracts";


export interface GovernanceAdaptiveRegulationV2Context {

request:GovernanceAdaptiveRegulationV2InputContract;

history:GovernanceAdaptiveRegulationV2RecordContract[];

}



export interface GovernanceAdaptiveRegulationV2Result {

record:GovernanceAdaptiveRegulationV2RecordContract;

executionTime:number;

}

