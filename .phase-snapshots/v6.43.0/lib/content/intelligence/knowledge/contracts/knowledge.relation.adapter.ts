import type {
 KnowledgeRelationContract,
 KnowledgeRelationship
} from "./knowledge.relation.contract";


export function toKnowledgeRelationContract(
 relationship:
 KnowledgeRelationship
):
 KnowledgeRelationContract {


 return {

  id:
    relationship.id,

  source:
    relationship.from,

  relation:
    relationship.type,

  target:
    relationship.to,

  metadata:
    relationship.metadata

 };

}
