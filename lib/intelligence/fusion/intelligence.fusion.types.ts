
export interface KnowledgeFusionRequest {


sources?:unknown[];


context?:unknown;


signals?:unknown[];


weights?:Record<string,number>;


}



export interface KnowledgeFusionResult {


id:string;


mergedContext:unknown;


confidence:number;


sources:unknown[];


createdAt:Date;


}

