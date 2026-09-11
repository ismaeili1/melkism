import {
 KnowledgeQuery
} from "./query.types";


export function buildKnowledgeQuery(
 input: KnowledgeQuery
){

 return {

   ...input,

   limit:
     input.limit ?? 20

 };

}
