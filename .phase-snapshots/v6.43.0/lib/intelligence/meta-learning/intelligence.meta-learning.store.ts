
import type {

IntelligenceMetaLearningRecord

}
from "./intelligence.meta-learning.types";


const records:
IntelligenceMetaLearningRecord[]
=
[];



export function saveMetaLearning(
record:IntelligenceMetaLearningRecord
){

records.push(record);

return record;

}



export function getAgentMetaLearning(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}



export function clearMetaLearning(){

records.length=0;

}

