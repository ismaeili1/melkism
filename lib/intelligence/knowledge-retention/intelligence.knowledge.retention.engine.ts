
import {

saveKnowledgeRetention,
getAgentKnowledgeRetention

}
from "./intelligence.knowledge.retention.store";


export function retainKnowledge(
data:any
){

return saveKnowledgeRetention({

id:crypto.randomUUID(),

createdAt:new Date(),

status:"retained",

metadata:null,

...data

});

}



export function evaluateKnowledgeValue(
agentId:string
){

return getAgentKnowledgeRetention(agentId);

}



export function generateKnowledgeRetentionReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}

