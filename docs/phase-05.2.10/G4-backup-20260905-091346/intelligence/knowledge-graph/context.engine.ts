import type {

KnowledgeContextRequest,

IntelligenceKnowledgeContext

} from "./context.types";



import type {

KnowledgeEntity,

KnowledgeRelation

} from "./knowledge.types";



export class KnowledgeContextInjectionEngine {



constructor(

private entities:KnowledgeEntity[],

private relations:KnowledgeRelation[]

){}



inject(

request:KnowledgeContextRequest

):IntelligenceKnowledgeContext {



const entities=

this.entities.filter(

entity=>

entity.name

.toLowerCase()

.includes(

request.query.toLowerCase()

)

)

.map(

entity=>entity.id

);



const relations=

this.relations.filter(

relation=>

entities.includes(relation.from)

||

entities.includes(relation.to)

)

.map(

relation=>relation.id

);



return {


request,


response:{


requestId:request.id,


entities,


relations,


knowledge:


entities.map(

id=>`knowledge:${id}`

),


confidence:

entities.length>0

?

1

:

0,


createdAt:new Date()


},


createdAt:new Date()


};



}



}

