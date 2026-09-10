
import type {

KnowledgeEntity,

KnowledgeRelation

} from "../contracts";



export interface KnowledgeExecutionContext {


entity:KnowledgeEntity;


relation:KnowledgeRelation;


}



export function processKnowledgeGraphGovernance(

context:KnowledgeExecutionContext

){


return {


module:"knowledge-graph-governance-v3",


status:"active",


entity:context.entity.id,


relation:context.relation.relation


};


}



