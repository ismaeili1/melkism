
export interface OrchestrationState {


id:string;


coordinationLevel:number;


collaborationLevel:number;


agentLevel:number;


orchestrationLevel:number;


confidence:number;


timestamp:Date;


}



export interface AgentCommunication {


source:string;


target:string;


message:string;


priority:number;


}


