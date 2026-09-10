import type {
KnowledgeRelation
} from "./knowledge.types";


const relations:
KnowledgeRelation[]=[];



export function registerRelation(
relation:KnowledgeRelation
){

relations.push(relation);

}



export function getRelations(){

return [...relations];

}


