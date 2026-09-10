import type {

KnowledgeNode,

KnowledgeRelation,

KnowledgeGraph

} from "./knowledge.types";



export class KnowledgeGraphEngine {



private nodes:KnowledgeNode[]=[];

private relations:KnowledgeRelation[]=[];



addNode(

node:KnowledgeNode

){


this.nodes.push(node);


}



connect(

from:string,

to:string,

type:KnowledgeRelation["type"],

weight:number

){



this.relations.push({


id:crypto.randomUUID(),


from,


to,


type,


weight,


createdAt:new Date()


});



}



getGraph():KnowledgeGraph{


return {


nodes:this.nodes,


relations:this.relations,


createdAt:new Date()


};



}



}

