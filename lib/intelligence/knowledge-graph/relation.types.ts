export interface GraphPath {


nodes:string[];


relations:string[];


weight:number;


createdAt:Date;


}



export interface RelationQuery {


entityId:string;


relationType?:string;


depth:number;


createdAt:Date;


}



export interface RelationshipScore {


from:string;


to:string;


score:number;


reason:string;


createdAt:Date;


}

