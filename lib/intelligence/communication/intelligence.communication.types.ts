
export type IntelligenceMessageType =

"knowledge"
|
"analysis"
|
"decision"
|
"notification"
|
"feedback";



export interface IntelligenceAgentMessage {


id:string;


from:string;


to:string;


type:IntelligenceMessageType;


payload:unknown;


createdAt:Date;


}

