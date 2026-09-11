/**
 * MELKISM Cognitive Context Runtime
 *
 * v0.9.0
 */


import type {
 CognitiveStateContract
}
from "../contracts/cognitive.state.contract";



export class CognitiveContextRuntime {



private readonly states:
Map<string,CognitiveStateContract>;



constructor(){

this.states =
new Map();

}



register(
state:CognitiveStateContract
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

