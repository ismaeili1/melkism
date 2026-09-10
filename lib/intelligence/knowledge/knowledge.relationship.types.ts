export type RelationshipPattern =

"strong"

|

"medium"

|

"weak";



export interface RelationshipAnalysisInput {


nodeId:string;


relationsCount:number;


averageWeight:number;


}



export interface RelationshipAnalysisResult {


nodeId:string;


pattern:RelationshipPattern;


strength:number;


connectedNodes:number;


createdAt:Date;


}

