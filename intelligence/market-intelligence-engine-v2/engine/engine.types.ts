
import type {

DomainIntelligenceInput,

DomainIntelligenceRecord

} from "../contracts";



export interface DomainIntelligenceContext {


request:

DomainIntelligenceInput;


history:

DomainIntelligenceRecord[];


}





export interface DomainIntelligenceResult {


record:

DomainIntelligenceRecord;


executionTime:number;


}



