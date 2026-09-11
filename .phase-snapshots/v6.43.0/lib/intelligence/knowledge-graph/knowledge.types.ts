export type KnowledgeEntityType =

"property"

|

"city"

|

"region"

|

"market"

|

"company"

|

"person"

|

"project";



export interface KnowledgeEntity {


id:string;


type:KnowledgeEntityType;


name:string;


metadata:unknown;


createdAt:Date;


}



export type KnowledgeRelationType =

"located_in"

|

"related_to"

|

"owned_by"

|

"invested_in"

|

"influences";



export interface KnowledgeRelation {


id:string;


from:string;


to:string;


type:KnowledgeRelationType;


weight:number;


createdAt:Date;


}



export interface KnowledgeGraph {


entities:KnowledgeEntity[];


relations:KnowledgeRelation[];


createdAt:Date;


}

