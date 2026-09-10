
export interface CognitiveArchitectureState {


id:string;


integrationLevel:number;


orchestrationLevel:number;


workflowLevel:number;


governanceLevel:number;


confidence:number;


timestamp:Date;


}



export interface CognitiveExecutionCycle {


cycleId:string;


inputContext:string;


outputContext:string;


}



export interface IntelligenceFlowNode {


nodeId:string;


intelligenceLayer:string;


coordinationScore:number;


}


