
import {

saveMemory,
getAgentMemory

}
from "./intelligence.memory.store";



export function rememberAgent(
data:any
){


return saveMemory({

id:crypto.randomUUID(),

createdAt:new Date(),

...data

});


}



export function recallAgent(
agentId:string
){

return getAgentMemory(agentId);

}



export function forgetAgent(){

return true;

}

