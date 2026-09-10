
import {

saveSemanticEntity,
getSemanticEntity,
getSemanticEntities,
deleteSemanticEntity

}
from "./knowledge.semantic.store";



export function addSemanticEntity(
entity:any
){

return saveSemanticEntity(entity);

}



export function findSemanticEntity(
id:string
){

return getSemanticEntity(id);

}



export function classifyKnowledge(
entity:any
){

return {

entityId:
entity.id,

domain:
entity.domain || "unknown",

confidence:
0.5

};

}



export function listSemanticEntities(){

return getSemanticEntities();

}



export function removeSemanticEntity(
id:string
){

return deleteSemanticEntity(id);

}



