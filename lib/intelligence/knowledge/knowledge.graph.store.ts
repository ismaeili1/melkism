
import type {
KnowledgeNode,
KnowledgeRelation
}
from "./knowledge.types";


const nodes:
Map<string,KnowledgeNode>
=
new Map();



const relations:
KnowledgeRelation[]
=
[];



export function addGraphNode(
node:KnowledgeNode
){

nodes.set(
node.id,
node
);

return node;

}



export function getGraphNode(
id:string
){

return nodes.get(id);

}



export function addGraphRelation(
relation:KnowledgeRelation
){

relations.push(relation);

return relation;

}



export function getGraphRelations(){

return relations;

}



export function getGraphNodes(){

return Array.from(
nodes.values()
);

}

