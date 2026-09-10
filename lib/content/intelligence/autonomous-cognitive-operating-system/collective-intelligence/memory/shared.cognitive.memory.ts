
import { CognitiveMemory } from "@/lib/content/intelligence/contracts/knowledge.contracts";

export class SharedCognitiveMemory {


private memories:CognitiveMemory[]=[];


store(memory:CognitiveMemory){


this.memories.push(memory);


return {


stored:true,


size:this.memories.length


};


}



retrieve(){


return this.memories;


}


}




