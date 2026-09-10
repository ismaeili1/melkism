
import type {

GovernanceAutonomousImprovementInput,

GovernanceAutonomousImprovementRecord

} from "../contracts";



export interface GovernanceAutonomousImprovementContext {


request:GovernanceAutonomousImprovementInput;


history:GovernanceAutonomousImprovementRecord[];


}



export interface GovernanceAutonomousImprovementResult {


record:GovernanceAutonomousImprovementRecord;


executionTime:number;


}



