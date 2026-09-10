
import type {

MetaIntelligenceMetaIntelligenceGovernanceInput,

MetaIntelligenceMetaIntelligenceGovernanceRecord

} from "../contracts";



export interface MetaIntelligenceMetaIntelligenceGovernanceContext {


request:

MetaIntelligenceMetaIntelligenceGovernanceInput;


history:

MetaIntelligenceMetaIntelligenceGovernanceRecord[];


}



export interface MetaIntelligenceMetaIntelligenceGovernanceResult {


record:

MetaIntelligenceMetaIntelligenceGovernanceRecord;


executionTime:number;


}



