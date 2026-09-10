import type {
AssistantSession
} from "./assistant.types";


const sessions:AssistantSession[]=[];


export function registerAssistantSession(
session:AssistantSession
){

sessions.push(session);

}


export function getAssistantSessions(){

return [...sessions];

}

