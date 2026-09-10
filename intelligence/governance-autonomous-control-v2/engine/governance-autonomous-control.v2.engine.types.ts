
import type {

GovernanceAutonomousControlV2InputContract,
GovernanceAutonomousControlV2RecordContract

} from "../contracts";


export interface GovernanceAutonomousControlV2Context {

request:GovernanceAutonomousControlV2InputContract;

history:GovernanceAutonomousControlV2RecordContract[];

}



export interface GovernanceAutonomousControlV2Result {

record:GovernanceAutonomousControlV2RecordContract;

executionTime:number;

}

