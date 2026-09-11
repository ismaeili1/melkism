
export interface RetrievalRequest {

 query:string;

 limit:number;

}


export function optimizeRetrieval(
 request:RetrievalRequest
){

 return {

  query:
   request.query.trim(),

  limit:
   Math.min(
    request.limit,
    100
   )

 };

}


