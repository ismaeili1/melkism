export interface AgentPolicy {

allowExecution:boolean;

requireApproval:boolean;

}


export const defaultAgentPolicy:

AgentPolicy={

allowExecution:false,

requireApproval:true

};


