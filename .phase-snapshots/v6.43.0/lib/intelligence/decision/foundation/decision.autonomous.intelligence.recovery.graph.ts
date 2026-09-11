/**
 * MELKISM Decision Autonomous Intelligence Recovery Graph
 * v38.20.14
 *
 * Decision graph foundation boundary.
 */


export interface DecisionGraphNode {


id: string;

mappingReference: string;

createdAt: Date;

}



export interface DecisionGraphEdge {


id: string;

sourceNode: string;

targetNode: string;

relationship: string;

createdAt: Date;

}



export class DecisionAutonomousIntelligenceRecoveryGraph {


private nodes:
DecisionGraphNode[] = [];


private edges:
DecisionGraphEdge[] = [];



createDecisionNode(

id: string,

mappingReference: string

) {


const node:
DecisionGraphNode = {


id,

mappingReference,

createdAt: new Date()


};


this.nodes.push(node);


return node;


}



createDecisionEdge(

id: string,

sourceNode: string,

targetNode: string,

relationship: string

) {


const edge:
DecisionGraphEdge = {


id,

sourceNode,

targetNode,

relationship,

createdAt: new Date()


};


this.edges.push(edge);


return edge;


}



getDecisionGraphHistory() {


return {

nodes: this.nodes,

edges: this.edges

};


}


}
