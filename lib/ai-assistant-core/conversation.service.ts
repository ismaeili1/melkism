import type {
AssistantMessage
} from "./assistant.types";


export function createConversation(
messages:AssistantMessage[]
){

return {

messages,

createdAt:
new Date().toISOString()

};

}

