import type {
KnowledgeItem
}
from "./knowledge.types";


export function createKnowledgeEntity(
data:KnowledgeItem
){

return {

...data,

createdAt:
new Date().toISOString()

};

}

