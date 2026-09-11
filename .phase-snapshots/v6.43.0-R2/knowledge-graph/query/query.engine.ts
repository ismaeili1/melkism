import {
 KnowledgeQuery
} from "./query.types";


export class KnowledgeQueryEngine {


 execute(
  query: KnowledgeQuery
 ){

  return {

   query,

   status:
    "foundation"

  };

 }


}
