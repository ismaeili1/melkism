
import type {

KnowledgeEntity,

KnowledgeRelation

} from "../contracts";



export interface KnowledgeExecutionContext {


entity:KnowledgeEntity;


relation:KnowledgeRelation;


}



export function processKnowledgeGraphCore(

context:KnowledgeExecutionContext

){


return {


module:"knowledge-graph-intelligence-core-v3",


status:"active",


entity:context.entity.id,


relation:context.relation.relation


};


}



