import type {

AgentAction,

AgentExecutionContext,

AgentToolType

} from "./agent.tool.types";



export class AgentActionRouter {



route(

agentId:string,

tool:AgentToolType,

input:unknown

):AgentExecutionContext {



const action:AgentAction={


id:crypto.randomUUID(),


agentId,


tool,


input,


status:"created",


createdAt:new Date()


};



return {


agentId,


actionId:action.id,


tool,


payload:input,


createdAt:new Date()


};



}



}



