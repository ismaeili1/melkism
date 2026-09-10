
import {

addNode,
findNode,
connectNodes,
listNodes,
listRelations

}
from "./knowledge.graph.engine";



export function createGraphNode(
node:any
){

return addNode(node);

}



export function getGraphNodeById(
id:string
){

return findNode(id);

}



export function createRelation(
relation:any
){

return connectNodes(relation);

}



export function getKnowledgeGraph(){

return {

nodes:listNodes(),

relations:listRelations()

};

}


