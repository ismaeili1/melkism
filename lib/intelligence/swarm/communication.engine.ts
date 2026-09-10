import type {

MessageEnvelope,

AgentChannel,

CommunicationContext

} from "./communication.types";



export class SwarmCommunicationEngine {



private messages:MessageEnvelope[]=[];


private channels:AgentChannel[]=[];



publish(

message:MessageEnvelope

){


this.messages.push(message);


}



createChannel(

channel:AgentChannel

){


this.channels.push(channel);


}



route(

topic:string

):MessageEnvelope[]{



return this.messages.filter(

message=>

message.topic===topic

);



}



getContext():CommunicationContext{


return {


channels:this.channels,


messages:this.messages,


createdAt:new Date()


};



}



}

