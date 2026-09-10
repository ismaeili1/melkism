
export interface AgentNetworkModel {

agents:string[];

connections:string[];

}



export interface WorkflowModel {

id:string;

steps:string[];

status:string;

}



export interface DecisionModel {

id:string;

input:string[];

output:string[];

}


