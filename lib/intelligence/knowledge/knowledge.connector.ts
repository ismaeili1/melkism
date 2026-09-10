import type {

KnowledgeNode

} from "./knowledge.types";


import type {

IntelligenceConnectorInput,

IntelligenceConnectorResult

} from "./knowledge.connector.types";


import {

KnowledgeGraphEngine

} from "./knowledge.engine";



export class KnowledgeIntelligenceConnector {



constructor(

private graph:KnowledgeGraphEngine

){}



connect(

input:IntelligenceConnectorInput

):IntelligenceConnectorResult {



const node:KnowledgeNode={


id:crypto.randomUUID(),


type:input.domain,


label:input.label,


metadata:input.metadata,


createdAt:new Date()


};



this.graph.addNode(node);



return {


nodeId:node.id,


domain:input.domain,


createdAt:new Date()


};



}



}



