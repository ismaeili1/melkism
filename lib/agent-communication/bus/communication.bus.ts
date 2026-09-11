import type {

AgentMessage

} from "../contracts/message.types";


export const messageBus:AgentMessage[]=[];


export function sendMessage(

message:AgentMessage

){

messageBus.push(message);

return message;

}

