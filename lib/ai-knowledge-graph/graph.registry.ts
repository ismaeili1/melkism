import type {
GraphNode
} from "./graph.types";


const nodes:GraphNode[]=[];


export function registerGraphNode(
node:GraphNode
){

nodes.push(node);

}


export function getGraphNodes(){

return [...nodes];

}

