/**
 * MELKISM Cognitive Learning Runtime
 *
 * v0.9.4
 */


import type {
 CognitiveLearningContract
}
from "../contracts/cognitive.learning.contract";



export class CognitiveLearningRuntime {



private readonly cycles:
Map<string,CognitiveLearningContract>;



constructor(){

this.cycles =
new Map();

}



register(
learning:CognitiveLearningContract
){

this.cycles.set(
learning.id,
learning
);

}



resolve(
id:string
){

return this.cycles.get(id);

}



list(){

return Array.from(
this.cycles.values()
);

}



}

