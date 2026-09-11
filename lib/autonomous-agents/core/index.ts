export type AIAgentCore={

name:string;

status:string;

};


export function createAgent(
name:string
){

return {

name,
status:"active"

};

}
