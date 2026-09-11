import type {

KnowledgeEntity,

KnowledgeRelation,

KnowledgeGraph

} from "./knowledge.types";



export class KnowledgeGraphRegistry {



private entities:KnowledgeEntity[]=[];


private relations:KnowledgeRelation[]=[];



addEntity(

entity:KnowledgeEntity

){


this.entities.push(entity);


}



addRelation(

relation:KnowledgeRelation

){


this.relations.push(relation);


}



getGraph():KnowledgeGraph{


return {


entities:this.entities,


relations:this.relations,


createdAt:new Date()


};



}



findEntity(

id:string

){


return this.entities.find(

entity=>entity.id===id

);


}



}

