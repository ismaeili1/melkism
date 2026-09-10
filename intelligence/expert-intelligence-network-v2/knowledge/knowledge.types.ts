
import type {

KnowledgeAsset,

KnowledgeSource,

KnowledgeState

} from "../contracts";



export interface KnowledgeExecutionContext {


asset:

KnowledgeAsset;


source:

KnowledgeSource;


state:

KnowledgeState;


}



export interface KnowledgeExecutionResult {


status:string;


quality:number;


executionTime:number;


}



