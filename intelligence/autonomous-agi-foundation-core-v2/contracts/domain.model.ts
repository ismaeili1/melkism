
export interface UnifiedIntelligenceState {


id:string;


fabricLevel:number;


agiLevel:number;


coordinationLevel:number;


governanceLevel:number;


confidence:number;


timestamp:Date;


}



export interface IntelligenceNode {


id:string;


domain:string;


capability:string;


priority:number;


}



export interface IntelligenceFlow {


id:string;


source:string;


target:string;


weight:number;


}


