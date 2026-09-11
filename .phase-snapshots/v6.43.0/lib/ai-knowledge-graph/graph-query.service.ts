import type {
GraphQueryResult
} from "./graph.types";


export function queryGraph(
nodes:GraphQueryResult["nodes"],
edges:GraphQueryResult["edges"]
):GraphQueryResult{


return {

nodes,

edges

};

}

