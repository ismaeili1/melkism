export type SemanticEntityType =

 | "property"
 | "location"
 | "market"
 | "investment"
 | "architecture";


export interface SemanticEntity {

id:string;

type:SemanticEntityType;

meaning:string;

}


