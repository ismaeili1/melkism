import type { CognitiveMemory } from "@/lib/content/intelligence/contracts/knowledge.contracts";

export class CognitiveLongTermMemoryStore {


private memories:CognitiveMemory[]=[];


store(memory:CognitiveMemory){


this.memories.push(memory);


return {


stored:true,


size:this.memories.length


};


}


getAll(){


return this.memories;


}


}



