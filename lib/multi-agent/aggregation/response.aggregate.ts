export interface AgentResponse {

agent:string;

content:string;

}


export function aggregateResponses(

responses:AgentResponse[]

){


return responses.map(

item=>item.content

).join("\n");


}


