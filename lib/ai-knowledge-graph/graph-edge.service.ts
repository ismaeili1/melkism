import type {
GraphEdge
} from "./graph.types";


export function createGraphEdge(
edge:GraphEdge
){

return {

...edge,

createdAt:
new Date().toISOString()

};

}

