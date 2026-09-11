import type {

AgentMessage,

CollaborationContext

} from "./communication.types";



export class AgentCommunicationRouter {



private messages:AgentMessage[]=[];



send(

message:AgentMessage

){


this.messages.push(message);


}



createContext(

agents:string[]

):CollaborationContext {



return {


id:crypto.randomUUID(),


agents,


messages:this.messages,


createdAt:new Date()


};



}



getMessages(){

return this.messages;

}



}

