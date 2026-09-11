export interface KnowledgeContext {

id:string;

source:string;

content:string;

semanticRelations:string[];

metadata?:Record<string,unknown>;

}

