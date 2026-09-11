export type SemanticRelationType =

"similar"

|

"meaning"

|

"category"

|

"association";



export interface SemanticLink {


id:string;


source:string;


target:string;


type:SemanticRelationType;


confidence:number;


createdAt:Date;


}



