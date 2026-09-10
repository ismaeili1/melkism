
export interface IntelligenceArchitectureState {


id:string;


moduleCount:number;


integrationLevel:number;


synchronizationLevel:number;


governanceLevel:number;


confidence:number;


timestamp:Date;


}



export interface IntelligenceFlow {


sourceModule:string;


targetModule:string;


operation:string;


result:string;


}


