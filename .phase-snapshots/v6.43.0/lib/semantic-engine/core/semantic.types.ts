export type SemanticRelationType =

| "related"
| "similar"
| "derived_from"
| "supports"
| "contradicts"
| "depends_on";


export interface SemanticNode {

id:string;

type:string;

label:string;

}


export interface SemanticRelation {

id:string;

source:string;

target:string;

relationType:SemanticRelationType;

confidence:number;

}

