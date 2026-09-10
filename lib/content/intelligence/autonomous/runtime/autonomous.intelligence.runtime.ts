/**
 * MELKISM Autonomous Intelligence Runtime
 *
 * v0.9.6
 */


import type {
 AutonomousStateContract
}
from "../contracts/autonomous.state.contract";



export class AutonomousIntelligenceRuntime {



private readonly states:
Map<string,AutonomousStateContract>;



constructor(){

this.states =
new Map();

}



register(
state:AutonomousStateContract
){

this.states.set(
state.id,
state
);

}



resolve(
id:string
){

return this.states.get(id);

}



list(){

return Array.from(
this.states.values()
);

}



}

