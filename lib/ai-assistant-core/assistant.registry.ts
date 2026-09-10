import type {
AssistantMessage
} from "./assistant.types";


const messages:AssistantMessage[]=[];


export function registerMessage(
message:AssistantMessage
){

messages.push(message);

}


export function getMessages(){

return [...messages];

}

