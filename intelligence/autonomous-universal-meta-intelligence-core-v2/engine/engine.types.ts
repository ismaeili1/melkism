
import type {

MetaIntelligenceMetaIntelligenceInput,

MetaIntelligenceMetaIntelligenceRecord

} from "../contracts";



export interface MetaIntelligenceMetaIntelligenceContext {


request:

MetaIntelligenceMetaIntelligenceInput;


history:

MetaIntelligenceMetaIntelligenceRecord[];


}



export interface MetaIntelligenceMetaIntelligenceResult {


record:

MetaIntelligenceMetaIntelligenceRecord;


executionTime:number;


}



