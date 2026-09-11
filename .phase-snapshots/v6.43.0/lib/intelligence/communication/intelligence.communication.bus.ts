
import {

saveMessage,
getMessagesForAgent

}
from "./intelligence.communication.store";



export function sendAgentMessage(
message:any
){

return saveMessage({

id:crypto.randomUUID(),

createdAt:new Date(),

...message

});

}



export function receiveAgentMessages(
agent:string
){

return getMessagesForAgent(agent);

}

