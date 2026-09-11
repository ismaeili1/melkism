
import {

sendAgentMessage,
receiveAgentMessages

}
from "./intelligence.communication.bus";



export function sendDirectMessage(
data:any
){

return sendAgentMessage(data);

}



export function broadcastAgentMessage(
agents:string[],
payload:any
){

return agents.map(
agent=>
sendAgentMessage({

from:"system",

to:agent,

type:"notification",

payload

})

);

}



export function getAgentInbox(
agent:string
){

return receiveAgentMessages(agent);

}

