
import {

addSemanticEntity,
findSemanticEntity,
classifyKnowledge,
listSemanticEntities,
removeSemanticEntity

}
from "./knowledge.semantic.engine";



export function createSemanticEntity(
entity:any
){

return addSemanticEntity(entity);

}



export function getSemanticEntityById(
id:string
){

return findSemanticEntity(id);

}



export function classify(
entity:any
){

return classifyKnowledge(entity);

}



export function getSemanticKnowledge(){

return listSemanticEntities();

}



export function deleteSemanticEntityById(
id:string
){

return removeSemanticEntity(id);

}



