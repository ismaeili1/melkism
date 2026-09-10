
import type {

KnowledgePlatformInput,

KnowledgePlatformRecord

} from "../contracts";



export interface KnowledgeContext {


request:

KnowledgePlatformInput;


history:

KnowledgePlatformRecord[];


}




export interface KnowledgeResult {


record:

KnowledgePlatformRecord;


executionTime:number;


}



