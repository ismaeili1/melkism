import type {
RetrievalRequest,
RetrievalContext
} from "./retrieval.types";


export function runRetrievalPipeline(
request:RetrievalRequest
):RetrievalContext{


return {

query:
request.query,

items:[],

score:0

};

}

