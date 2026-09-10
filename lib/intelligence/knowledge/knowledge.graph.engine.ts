
import {

addGraphNode,
getGraphNode,
addGraphRelation,
getGraphNodes,
getGraphRelations

}
from "./knowledge.graph.store";



export function addNode(
node:any
){

return addGraphNode(node);

}



export function findNode(
id:string
){

return getGraphNode(id);

}



export function connectNodes(
relation:any
){

return addGraphRelation(relation);

}



export function listNodes(){

return getGraphNodes();

}



export function listRelations(){

return getGraphRelations();

}



