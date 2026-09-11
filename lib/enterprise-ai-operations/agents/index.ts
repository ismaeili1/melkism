export type AgentOperation={

agent:string;

state:string;

};


export function manageAgent(
agent:string
){

return {

agent,
state:"managed"

};

}
