import type {

KnowledgeNode,

KnowledgeRelationship,

GraphRelationType

} from "./graph.types";



export class KnowledgeGraphEngine {



private nodes:
KnowledgeNode[] = [];


private relationships:
KnowledgeRelationship[] = [];



addNode(

label:string,

data:unknown

){


const node:KnowledgeNode={


id:
crypto.randomUUID(),


label,


data,


createdAt:
new Date()


};



this.nodes.push(node);


return node;


}



connect(

sourceId:string,

targetId:string,

type:GraphRelationType

){


const relationship:KnowledgeRelationship={


id:
crypto.randomUUID(),


sourceId,


targetId,


type,


createdAt:
new Date()


};



this.relationships.push(relationship);


return relationship;


}



getNode(id:string){


return this.nodes.find(

node=>

node.id===id

);


}



getRelations(){


return this.relationships;


}



getNodes(){


return this.nodes;


}



}



