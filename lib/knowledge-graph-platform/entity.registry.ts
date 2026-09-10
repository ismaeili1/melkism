import type {
KnowledgeEntity
} from "./knowledge.types";


const entities:
KnowledgeEntity[]=[];



export function registerEntity(
entity:KnowledgeEntity
){

if(
!entities.some(
item=>item.id===entity.id
)
){

entities.push(entity);

}

}



export function getEntities(){

return [...entities];

}


