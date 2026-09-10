
import type {

KnowledgeRecord,

KnowledgeExchange

} from "../contracts";



export interface KnowledgeExecutionContext {


record:

KnowledgeRecord;


exchange:

KnowledgeExchange;


}



export interface KnowledgeExecutionResult {


knowledge:

KnowledgeRecord;


executionTime:number;


}



