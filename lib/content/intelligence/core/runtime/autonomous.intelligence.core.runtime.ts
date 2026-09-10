/**
 * MELKISM Autonomous Intelligence Core Runtime
 *
 * v1.0.0
 */


import type {
 AutonomousIntelligenceCoreContract
}
from "../contracts/autonomous.intelligence.core.contract";



export class AutonomousIntelligenceCoreRuntime {



private readonly states:
Map<string,AutonomousIntelligenceCoreContract>;



constructor(){

this.states =
new Map();

}



initialize(
state:AutonomousIntelligenceCoreContract
){

this.states.set(
state.id,
state
);


return state;

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

