export type KnowledgeEntityType =

| "city"
| "country"
| "property"
| "architecture"
| "market"
| "article"
| "research"
| "organization";


export interface KnowledgeEntity {

id:string;

type:KnowledgeEntityType;

title:string;

metadata?:Record<string,unknown>;

}

