
import {

saveMetaLearning,
getAgentMetaLearning

}
from "./intelligence.meta-learning.store";



export function analyzeLearningPattern(
data:any
){

return saveMetaLearning({

id:crypto.randomUUID(),

createdAt:new Date(),

confidence:data.confidence ?? 0,

improvement:null,

...data

});

}



export function generateLearningStrategy(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}



export function optimizeLearningProcess(
agentId:string
){

return getAgentMetaLearning(agentId);

}

