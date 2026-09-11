import type {

KnowledgeQuery,

KnowledgeQueryResult,

KnowledgeContext

} from "./query.types";



import type {

KnowledgeEntity,

KnowledgeRelation

} from "./knowledge.types";



export class KnowledgeQueryIntelligenceEngine {



constructor(

private entities:KnowledgeEntity[],

private relations:KnowledgeRelation[]

){}



execute(

query:KnowledgeQuery

):KnowledgeContext {



const matchedEntities=

this.entities.filter(

entity=>

entity.name

.toLowerCase()

.includes(

query.term.toLowerCase()

)

)

.map(

entity=>entity.id

);



const matchedRelations=

this.relations.filter(

relation=>

matchedEntities.includes(relation.from)

||

matchedEntities.includes(relation.to)

)

.map(

relation=>relation.id

);



const result:KnowledgeQueryResult={


queryId:query.id,


entities:matchedEntities,


relations:matchedRelations,


confidence:

matchedEntities.length>0

?

1

:

0,


createdAt:new Date()


};



return {


query,


result,


createdAt:new Date()


};



}



}

