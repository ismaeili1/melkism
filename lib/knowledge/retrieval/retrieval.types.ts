export interface KnowledgeItem {


id:string;


content:string;


metadata?:
Record<string,unknown>;


}



export interface RetrievalQuery {


query:string;


limit?:number;


}



export interface RetrievalResult {


item:KnowledgeItem;


score:number;


}



