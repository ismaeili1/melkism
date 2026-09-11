export interface KnowledgeVersion {

 id:string;

 timestamp:string;

 source:string;

}


export interface KnowledgeChange {

 version:KnowledgeVersion;

 previous:string;

 current:string;

}


