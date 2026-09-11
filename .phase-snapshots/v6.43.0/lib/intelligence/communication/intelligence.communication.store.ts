
import type {

IntelligenceAgentMessage

}
from "./intelligence.communication.types";



const messages:
IntelligenceAgentMessage[]
=
[];



export function saveMessage(
message:IntelligenceAgentMessage
){

messages.push(message);

return message;

}



export function getMessagesForAgent(
agent:string
){

return messages.filter(
message=>message.to===agent
);

}



export function getAllMessages(){

return messages;

}



export function clearMessages(){

messages.length=0;

}

