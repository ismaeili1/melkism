/**
 * MELKISM Self-Adaptive Intelligence Runtime
 *
 * v0.9.5
 */


import type {
 SelfAdaptiveStateContract
}
from "../contracts/self.adaptive.state.contract";



export class SelfAdaptiveIntelligenceRuntime {



private readonly states:
Map<string,SelfAdaptiveStateContract>;



constructor(){

this.states =
new Map();

}



register(
state:SelfAdaptiveStateContract
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

