export interface RetrievalQuery {


keyword:string;


limit?:number;


}



export interface RetrievalResult {


memoryId:string;


title?:string;


content?:unknown;


score:number;


}



