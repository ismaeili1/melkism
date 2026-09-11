import type {
AgentRuntimeState
} from "./agent.types";


export class AgentRuntimeManager {


private states:
Map<string,AgentRuntimeState>
=
new Map();



register(id:string){

this.states.set(
id,
{
id,
status:"created"
}
);

}



getState(id:string){

return this.states.get(id);

}



updateStatus(
id:string,
status:AgentRuntimeState["status"]
){

const state =
this.states.get(id);


if(state){

state.status=status;

}

}


}

