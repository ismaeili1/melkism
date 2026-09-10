import type {
KnowledgeRelation
} from "./knowledge.types";


export function createRelationship(
relation:KnowledgeRelation
){

return {

...relation,

createdAt:
new Date().toISOString()

};

}

