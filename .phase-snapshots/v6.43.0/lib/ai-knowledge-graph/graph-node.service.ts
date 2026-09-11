import type {
GraphNode
} from "./graph.types";


export function createGraphNode(
node:GraphNode
){

return {

...node,

createdAt:
new Date().toISOString()

};

}

