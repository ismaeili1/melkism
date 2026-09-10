export interface CognitiveKnowledgeNode {


id:string;


concept:string;


domain:string;


importance:number;


status:

"active"|
"connected";

}



export class CognitiveKnowledgeNodeRegistry {


private nodes=

new Map<string,CognitiveKnowledgeNode>();



register(node:CognitiveKnowledgeNode){

this.nodes.set(

node.id,

node

);

return node;

}



get(id:string){

return this.nodes.get(id);

}



list(){

return Array.from(this.nodes.values());

}

}
