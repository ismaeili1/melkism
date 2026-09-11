export interface AgentMessage {

sender:string;

receiver:string;

payload:string;

}


export function createAgentMessage(

sender:string,

receiver:string,

payload:string

):AgentMessage {


return {

sender,

receiver,

payload

};


}


