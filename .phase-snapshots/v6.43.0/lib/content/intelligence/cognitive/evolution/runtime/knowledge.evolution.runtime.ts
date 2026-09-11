/**
 * MELKISM Knowledge Evolution Runtime
 *
 * v0.9.2
 */


import type {
 KnowledgeEvolutionContract
}
from "../contracts/knowledge.evolution.contract";



export class KnowledgeEvolutionRuntime {



private readonly evolution:
Map<string,KnowledgeEvolutionContract>;



constructor(){

this.evolution =
new Map();

}



record(
item:
KnowledgeEvolutionContract
){

this.evolution.set(
item.id,
item
);

}



resolve(
id:string
){

return this.evolution.get(id);

}



list(){

return Array.from(
this.evolution.values()
);

}



}



