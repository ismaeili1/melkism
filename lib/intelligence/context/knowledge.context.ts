import type {

IntelligenceContext

} from "./context.types";


import type {

RetrievalResult

} from "../retrieval/retrieval.types";



export class KnowledgeContextEngine {



build(

query:string,

results:RetrievalResult[]

):IntelligenceContext {



return {


id:crypto.randomUUID(),


query,


results,


createdAt:new Date()


};


}



}



