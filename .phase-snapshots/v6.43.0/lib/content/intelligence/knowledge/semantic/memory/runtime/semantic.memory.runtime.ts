/**
 * MELKISM Semantic Intelligence Memory Runtime
 *
 * v0.8.4
 */


import type {
 SemanticMemoryRecord
}
from "../contracts/semantic.memory.contract";



export class SemanticMemoryRuntime {



private readonly memory:
Map<string, SemanticMemoryRecord>;



constructor(){

 this.memory =
 new Map();

}



store(
 record: SemanticMemoryRecord
): void {

 this.memory.set(
   record.id,
   record
 );

}



retrieve(
 id:string
):
SemanticMemoryRecord | undefined {

 return this.memory.get(id);

}



list():
readonly SemanticMemoryRecord[] {

 return Array.from(
   this.memory.values()
 );

}


}

