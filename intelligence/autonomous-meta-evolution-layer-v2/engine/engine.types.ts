
import type {

MetaIntelligenceMetaEvolutionInput,

MetaIntelligenceMetaEvolutionRecord

} from "../contracts";



export interface MetaIntelligenceMetaEvolutionContext {


request:

MetaIntelligenceMetaEvolutionInput;


history:

MetaIntelligenceMetaEvolutionRecord[];


}



export interface MetaIntelligenceMetaEvolutionResult {


record:

MetaIntelligenceMetaEvolutionRecord;


executionTime:number;


}



