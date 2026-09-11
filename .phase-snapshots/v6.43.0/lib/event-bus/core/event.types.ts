export type IntelligenceEventType =

| "AGENT_STARTED"
| "KNOWLEDGE_UPDATED"
| "DECISION_CREATED"
| "LEARNING_COMPLETED";


export interface IntelligenceEvent {

id:string;

type:IntelligenceEventType;

payload:unknown;

timestamp:Date;

}

