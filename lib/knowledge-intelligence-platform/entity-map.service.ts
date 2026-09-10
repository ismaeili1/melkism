import type {
KnowledgeEntity
} from "./knowledge.types";


export function mapEntity(
entity:KnowledgeEntity
){

return {

...entity,

mapped:true

};

}

