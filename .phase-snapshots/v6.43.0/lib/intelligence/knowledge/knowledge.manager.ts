import {

saveKnowledge,
getKnowledge,
searchKnowledge,
removeKnowledge

}
from "./knowledge.repository";



export function createKnowledge(
item:any
){

return saveKnowledge(item);

}



export function listKnowledge(){

return getKnowledge();

}



export function findKnowledge(
query:string
){

return searchKnowledge(query);

}



export function deleteKnowledge(
id:string
){

return removeKnowledge(id);

}

