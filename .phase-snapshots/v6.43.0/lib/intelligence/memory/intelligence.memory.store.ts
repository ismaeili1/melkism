
import type {

IntelligenceAgentMemory

}
from "./intelligence.memory.types";


const memories:
IntelligenceAgentMemory[]
=
[];



export function saveMemory(
memory:IntelligenceAgentMemory
){

memories.push(memory);

return memory;

}



export function getAgentMemory(
agentId:string
){

return memories.filter(
memory=>memory.agentId===agentId
);

}



export function clearMemory(){

memories.length=0;

}

