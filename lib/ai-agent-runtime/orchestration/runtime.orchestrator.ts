import type {

AgentRuntimeRequest

} from "../contracts/runtime.types";


export function orchestrateAgent(

request:AgentRuntimeRequest

){


return {

accepted:false,

reason:
"Governance approval required",

request

};


}


