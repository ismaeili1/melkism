
import type {

GovernanceSelfRegulationV2InputContract,
GovernanceSelfRegulationV2RecordContract

} from "../contracts";


export interface GovernanceSelfRegulationV2Context {

request:GovernanceSelfRegulationV2InputContract;

history:GovernanceSelfRegulationV2RecordContract[];

}



export interface GovernanceSelfRegulationV2Result {

record:GovernanceSelfRegulationV2RecordContract;

executionTime:number;

}

