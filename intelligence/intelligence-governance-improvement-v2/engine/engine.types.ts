
import type {

IntelligenceGovernanceImprovementInput,

IntelligenceGovernanceImprovementRecord

} from "../contracts";



export interface IntelligenceGovernanceImprovementContext {


request:IntelligenceGovernanceImprovementInput;


history:IntelligenceGovernanceImprovementRecord[];


}



export interface IntelligenceGovernanceImprovementResult {


record:IntelligenceGovernanceImprovementRecord;


executionTime:number;


}


