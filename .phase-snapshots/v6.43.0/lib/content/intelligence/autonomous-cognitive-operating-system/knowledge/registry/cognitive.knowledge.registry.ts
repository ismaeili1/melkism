export interface CognitiveKnowledge {


id:string;


domain:string;


source:string;


confidence:number;


status:

"acquired"|
"validated"|
"integrated";

}



export class CognitiveKnowledgeRegistry {


private knowledge=

new Map<string,CognitiveKnowledge>();



register(item:CognitiveKnowledge){

this.knowledge.set(

item.id,

item

);

return item;

}



get(id:string){

return this.knowledge.get(id);

}



list(){

return Array.from(this.knowledge.values());

}

}
