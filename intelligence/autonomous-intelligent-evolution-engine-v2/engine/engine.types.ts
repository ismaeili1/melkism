
import type {

CognitiveSynthesisIntelligentEvolutionInput,

CognitiveSynthesisIntelligentEvolutionRecord

} from "../contracts";



export interface CognitiveSynthesisIntelligentEvolutionContext {


request:

CognitiveSynthesisIntelligentEvolutionInput;


history:

CognitiveSynthesisIntelligentEvolutionRecord[];


}



export interface CognitiveSynthesisIntelligentEvolutionResult {


record:

CognitiveSynthesisIntelligentEvolutionRecord;


executionTime:number;


}



