import type {

KnowledgeRelation,

KnowledgeEntity

} from "./knowledge.types";



import type {

GraphPath,

RelationshipScore

} from "./relation.types";



export class RelationshipIntelligenceEngine {



constructor(

private entities:KnowledgeEntity[],

private relations:KnowledgeRelation[]

){}



findConnections(

entityId:string

):GraphPath[] {



const paths=this.relations

.filter(

relation=>

relation.from===entityId ||

relation.to===entityId

)

.map(

relation=>({

nodes:[

relation.from,

relation.to

],


relations:[

relation.type

],


weight:relation.weight,


createdAt:new Date()

})

);



return paths;



}



score(

relation:KnowledgeRelation

):RelationshipScore {



return {


from:relation.from,


to:relation.to,


score:relation.weight,


reason:

"relationship weight evaluation",


createdAt:new Date()


};



}



}

