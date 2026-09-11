import type {

AgentMessage

} from "../contracts/message.types";


export function validateMessage(

message:AgentMessage

){

return Boolean(

message.sender &&
message.receiver &&
message.payload

);

}

