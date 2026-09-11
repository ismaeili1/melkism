import type {
KnowledgeItem
}
from "./knowledge.types";


const store:
KnowledgeItem[]=[];



export function saveKnowledge(
item:KnowledgeItem
){

store.push(item);

return item;

}



export function getKnowledge(){

return store;

}



export function searchKnowledge(
query:string
){

return store.filter(item =>

item.title
.includes(query)

);

}



export function removeKnowledge(
id:string
){

const index=
store.findIndex(
item=>item.id===id
);


if(index>=0){

store.splice(index,1);

}


}

