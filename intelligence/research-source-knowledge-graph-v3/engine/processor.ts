
import type {

KnowledgeEntity,

KnowledgeRelation

} from "../contracts";



export interface KnowledgeExecutionContext {


entity:KnowledgeEntity;


relation:KnowledgeRelation;


}



export function processResearchKnowledgeGraph(

context:KnowledgeExecutionContext

){


return {


module:"research-source-knowledge-graph-v3",


status:"active",


entity:context.entity.id,


relation:context.relation.relation


};


}



