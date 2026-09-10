
export interface IntelligenceMeshState {


id:string;


orchestrationLevel:number;


meshConnectivity:number;


knowledgeFlowLevel:number;


governanceLevel:number;


confidence:number;


timestamp:Date;


}



export interface MeshNode {


nodeId:string;


intelligenceDomain:string;


meshScore:number;


}



export interface KnowledgeMeshCycle {


cycleId:string;


previousKnowledgeState:string;


currentKnowledgeState:string;


}


