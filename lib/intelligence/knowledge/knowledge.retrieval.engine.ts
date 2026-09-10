
import {
searchKnowledge
}
from "./knowledge.repository";


import type {
KnowledgeRetrievalRequest,
KnowledgeRetrievalResult
}
from "./knowledge.retrieval.types";



export function retrieveKnowledge(
request:KnowledgeRetrievalRequest
):KnowledgeRetrievalResult {



const items =
searchKnowledge(
request.query
);



return {


items,

score:
items.length
?
1
:
0,


metadata:{

query:
request.query

}


};


}


