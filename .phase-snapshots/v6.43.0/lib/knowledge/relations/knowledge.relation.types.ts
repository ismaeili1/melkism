export type KnowledgeRelationType =

| "located_in"
| "related_to"
| "influenced_by"
| "analyzed_by"
| "connected_with";


export interface KnowledgeRelation {

source:string;

target:string;

type:KnowledgeRelationType;

confidence?:number;

}

