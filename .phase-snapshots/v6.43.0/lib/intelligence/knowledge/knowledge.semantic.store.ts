
import type {

SemanticEntity

}
from "./knowledge.semantic.types";



const entities:
Map<string,SemanticEntity>
=
new Map();



export function saveSemanticEntity(
entity:SemanticEntity
){

entities.set(
entity.id,
entity
);


return entity;

}



export function getSemanticEntity(
id:string
){

return entities.get(id);

}



export function getSemanticEntities(){

return Array.from(
entities.values()
);

}



export function deleteSemanticEntity(
id:string
){

entities.delete(id);

}



