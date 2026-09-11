import type {
KnowledgeEntity
} from "./knowledge.types";


const entities:
KnowledgeEntity[]=[];



export function registerEntity(
entity:KnowledgeEntity
){

entities.push(entity);

}



export function getEntities(){

return [...entities];

}

