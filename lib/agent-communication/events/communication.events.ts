export type CommunicationEventType =
 | "sent"
 | "received"
 | "rejected";


export interface CommunicationEvent {

type:CommunicationEventType;

timestamp:string;

}

