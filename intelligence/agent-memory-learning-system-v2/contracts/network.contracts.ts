
export interface AgentMessage {


id:string;


sender:string;


receiver:string;


payload:string;


timestamp:Date;


}



export interface AgentNetworkRecord {


id:string;


agents:string[];


communicationScore:number;


collaborationScore:number;


status:string;


createdAt:Date;


}



