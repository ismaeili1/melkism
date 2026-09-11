export type AgentCapability={

name:string;

action:string;

};


export function addCapability(
name:string,
action:string
){

return {

name,
action

};

}
