export interface SemanticFeature {


name:string;


value:string;


weight:number;


}



export interface SemanticEntity {


entityId:string;


features:SemanticFeature[];


keywords:string[];


createdAt:Date;


}



export interface SemanticSimilarity {


sourceId:string;


targetId:string;


score:number;


matchedFeatures:string[];


createdAt:Date;


}

