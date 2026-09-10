import {
AgentRuntimeManager
} from "./agent.runtime";


export class AgentService {


private runtime =
new AgentRuntimeManager();



createAgent(id:string){

this.runtime.register(id);

return this.runtime.getState(id);

}



getAgent(id:string){

return this.runtime.getState(id);

}


}

