/**
 * MELKISM Adaptive Intelligence Runtime
 *
 * v0.9.3
 */


import type {
 AdaptiveStateContract
}
from "../contracts/adaptive.state.contract";



export class AdaptiveIntelligenceRuntime {



private readonly states:
Map<string,AdaptiveStateContract>;



constructor(){

this.states =
new Map();

}



register(
state:AdaptiveStateContract
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

