
import type {

GovernanceEvolutionRegulationV2InputContract,
GovernanceEvolutionRegulationV2RecordContract

} from "../contracts";


export interface GovernanceEvolutionRegulationV2Context {

request:GovernanceEvolutionRegulationV2InputContract;

history:GovernanceEvolutionRegulationV2RecordContract[];

}



export interface GovernanceEvolutionRegulationV2Result {

record:GovernanceEvolutionRegulationV2RecordContract;

executionTime:number;

}

